import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { RecordToUnion } from "./08-record-to-union.ts";

// 샘플 레코드
type Routes = {
  home: { path: "/"; auth: false };
  user: { path: "/users/:id"; auth: true };
  about: { path: "/about"; auth: false };
};

// 기대 유니온
type Expected =
  | { key: "home"; path: "/"; auth: false }
  | { key: "user"; path: "/users/:id"; auth: true }
  | { key: "about"; path: "/about"; auth: false };

// 기본 동작
type R = RecordToUnion<Routes>;
type _1 = Expect<Equal<R, Expected>>;

// 분기 안전성 예시
declare function handleRoute(r: R): string;

handleRoute({ key: "home", path: "/", auth: false });
handleRoute({ key: "user", path: "/users/:id", auth: true });
handleRoute({ key: "about", path: "/about", auth: false });

// 잘못된 key → 에러
// @ts-expect-error
handleRoute({ key: "contact", path: "/contact", auth: false });

// key는 맞지만 값 shape이 다름 → 에러
// @ts-expect-error
handleRoute({ key: "user", path: "/users/:id", auth: false });

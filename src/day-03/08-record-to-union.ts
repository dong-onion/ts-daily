/**
 * Problem 08 - record-to-union
 *
 * Context:
 *   라우트/권한/이벤트처럼 "키 → 상세 설정" 형태의 객체(Record)를
 *   분기(디스크리미네이티드) 유니온으로 펼쳐서 안전한 분기 처리에 쓰고 싶습니다.
 *
 * Goal:
 *   RecordToUnion<T>를 구현하세요.
 *   - T가 { [K in keyof T]: ... } 형태일 때,
 *     결과는 각 K에 대해 `{ key: K } & T[K]` 를 원소로 갖는 유니온이어야 합니다.
 *
 * Example:
 *   type Routes = {
 *     home: { path: "/"; auth: false };
 *     user: { path: "/users/:id"; auth: true };
 *     about: { path: "/about"; auth: false };
 *   }
 *
 *   type R = RecordToUnion<Routes>;
 *   // 기대:
 *   // | { key: "home";  path: "/";              auth: false }
 *   // | { key: "user";  path: "/users/:id";     auth: true  }
 *   // | { key: "about"; path: "/about";         auth: false }
 */

// ❌ 초기 상태(실패하도록 유지)

export type RecordToUnion<T extends Record<string, any>> = {
  [K in keyof T]: { key: K } & T[K];
}[keyof T];

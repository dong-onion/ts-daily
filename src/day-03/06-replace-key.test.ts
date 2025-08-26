import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { ReplaceKey } from "./06-replace-key.ts";

type User = {
  id: string;
  name: string;
  email: string;
};

type R1 = ReplaceKey<User, "id", number>;
type R1_Expected = { id: number; name: string; email: string };
type _1 = Expect<Equal<R1, R1_Expected>>;

type R2 = ReplaceKey<User, "email", boolean>;
type R2_Expected = { id: string; name: string; email: boolean };
type _2 = Expect<Equal<R2, R2_Expected>>;

// K는 반드시 User의 키여야 함
// @ts-expect-error
type _err = ReplaceKey<User, "notExist", string>;

import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { PublicUser } from "./02-public-user.ts";

type Expected = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
};

type _1 = Expect<Equal<PublicUser, Expected>>;

// 비공개 키가 섞여 들어오면 안 됨(타입 차원에서 배제)
type _2 = Expect<Equal<Extract<keyof PublicUser, "password" | "ssn">, never>>;

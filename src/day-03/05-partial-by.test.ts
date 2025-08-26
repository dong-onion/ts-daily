import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { PartialBy } from "./05-partial-by.ts";

type User = { id: string; name: string; email: string; age?: number };

type _cases = [
  Expect<
    Equal<
      PartialBy<User, "email">,
      { id: string; name: string; email?: string; age?: number }
    >
  >,
  Expect<
    Equal<
      PartialBy<User, "name" | "age">,
      { id: string; name?: string; email: string; age?: number }
    >
  >
];

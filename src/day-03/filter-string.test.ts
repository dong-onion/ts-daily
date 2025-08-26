import type { Expect, Equal } from "../../test/type-assert.ts";
import type { FilterString } from "./filter-string.js";

type A = Expect<Equal<FilterString<string>, string>>;
type B = Expect<Equal<FilterString<number>, never>>;
type C = Expect<Equal<FilterString<"hello">, "hello">>;
type D = Expect<Equal<FilterString<boolean>, never>>;

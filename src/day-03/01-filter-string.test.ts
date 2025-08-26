import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { FilterString } from "./01-filter-string.ts";

type T1 = Expect<Equal<FilterString<string>, string>>;
type T2 = Expect<Equal<FilterString<number>, never>>;
type T3 = Expect<Equal<FilterString<"hello">, "hello">>;
type T4 = Expect<Equal<FilterString<boolean>, never>>;
type T5 = Expect<Equal<FilterString<string | 1>, string>>;

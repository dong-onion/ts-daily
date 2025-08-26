import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { ApiMap, ValueOf, ApiValues } from "./04-api-values.ts";

type _1 = Expect<Equal<ValueOf<{ a: 1; b: 2 }>, 1 | 2>>;
type _2 = Expect<Equal<ValueOf<Record<"x" | "y", "ok">>, "ok">>;

type _3 = Expect<
  Equal<
    ApiValues<ApiMap>,
    | { id: string; name: string }
    | Array<{ id: string; price: number }>
    | { ok: true }
  >
>;

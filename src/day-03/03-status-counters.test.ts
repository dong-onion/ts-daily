import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { Status, Counters } from "./03-status-counters.ts";

type _1 = Expect<Equal<Status, "idle" | "loading" | "success" | "error">>;
type _2 = Expect<Equal<Counters, Record<Status, number>>>;

// ✅ 올바른 예시
const ok: Counters = { idle: 0, loading: 0, success: 0, error: 0 };
void ok;

// ❌ 누락된 경우 → 타입 에러
// @ts-expect-error
const miss: Counters = { idle: 0, loading: 0, success: 0 };
void miss;

// ❌ 초과 키 → 타입 에러
// @ts-expect-error
const extra: Counters = {
  idle: 0,
  loading: 0,
  success: 0,
  error: 0,
  paused: 1,
};
void extra;

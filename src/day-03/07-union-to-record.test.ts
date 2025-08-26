import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { UnionToRecord } from "./07-union-to-record.ts";

type Status = "idle" | "loading" | "success" | "error";

// 기본 동작
type C = UnionToRecord<Status, number>;
type _requiredCheck = Expect<Equal<C, Required<C>>>;
type C_Expected = {
  idle: number;
  loading: number;
  success: number;
  error: number;
};
type _1 = Expect<Equal<C, C_Expected>>;

// 숫자 리터럴 키도 가능
type Nums = 1 | 2 | 3;
type NR = UnionToRecord<Nums, boolean>;
type NR_Expected = { 1: boolean; 2: boolean; 3: boolean };
type _2 = Expect<Equal<NR, NR_Expected>>;

// 누락/초과 키 체크 (타입 에러가 나야 함)

// ✅ OK
const ok: C = { idle: 0, loading: 0, success: 0, error: 0 };
void ok;

// ❌ 누락
// @ts-expect-error
const miss = { idle: 0, loading: 0, success: 0 } satisfies C;

// ❌ 초과
// @ts-expect-error
const extra = {
  idle: 0,
  loading: 0,
  success: 0,
  error: 0,
  paused: 1,
} satisfies C;

/**
 * Problem 07 - union-to-record
 *
 * Context:
 *   상태/권한/토큰 등 문자열(또는 숫자) 리터럴 유니언을
 *   키로 가지는 객체 타입이 필요합니다.
 *   예: "idle" | "loading" | "success" | "error" -> { idle: V; loading: V; ... }
 *
 * Goal:
 *   UnionToRecord<U, V>를 구현하세요.
 *   - U가 유니언("a" | "b" ...)일 때, 각 원소를 key로 하고 값 타입은 V인 객체 타입을 만듭니다.
 *   - U는 문자열/숫자/심볼 키가 올 수 있습니다(PropertyKey).
 *
 * Example:
 *   type Status = "idle" | "loading" | "success" | "error";
 *   type Counters = UnionToRecord<Status, number>;
 *   // 기대: { idle: number; loading: number; success: number; error: number }
 */

// ❌ 초기 상태(실패하도록 유지)
export type UnionToRecord<U extends PropertyKey, V> = { [K in U]: V };

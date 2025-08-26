/**
 * Problem 03 - status-counters
 *
 * Context:
 *   대시보드에서 요청 상태별 카운터를 관리해야 합니다.
 *   각 상태는 반드시 number 값을 가지도록 강제하고 싶습니다.
 *
 * Goal:
 *   - Status 유니언 타입을 정의하세요: "idle" | "loading" | "success" | "error"
 *   - Counters 타입을 정의하세요:
 *     Status의 모든 키를 반드시 포함하고, 값은 number 여야 합니다.
 *
 * Example:
 *   const ok: Counters = { idle: 0, loading: 0, success: 0, error: 0 } // ✅
 *   const miss: Counters = { idle: 0, loading: 0, success: 0 }          // ❌ error 누락
 *   const extra: Counters = { idle: 0, loading: 0, success: 0, error: 0, paused: 1 } // ❌ 초과 키
 */

// ❌ 초기 상태(실패하도록 유지)
export type Status = "idle" | "loading" | "success" | "error";
export type Counters = {
  [K in Status]: number;
};

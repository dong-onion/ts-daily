/**
 * Problem 04 - api-values
 *
 * Context:
 *   여러 API 엔드포인트의 응답 타입을 관리하는 ApiMap이 있습니다.
 *   각 엔드포인트는 { data: ... } 형태로 감싸져 있는데,
 *   우리는 "data 필드의 타입들만 모아서" 하나의 유니언으로 만들고 싶습니다.
 *
 * Goal:
 *   - ValueOf<T>라는 유틸리티 타입을 만드세요.
 *     → 객체 T의 value 타입들의 유니언을 반환
 *
 *   - ApiValues<T>라는 유틸리티 타입을 만드세요.
 *     → ApiMap 같은 구조에서 각 엔드포인트의 `data` 타입들만 추출해 유니언으로 반환
 *
 * Example:
 *   type Values = ApiValues<ApiMap>;
 *   // 기대: { id: string; name: string }
 *   //      | Array<{ id: string; price: number }>
 *   //      | { ok: true }
 */

export type ApiMap = {
  "/me": { data: { id: string; name: string } };
  "/items": { data: Array<{ id: string; price: number }> };
  "/health": { data: { ok: true } };
};

// ❌ 초기 상태(실패하도록 유지)
export type ValueOf<T> = T[keyof T];
export type ApiValues<T> = T[keyof T]["data"];

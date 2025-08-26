/**
 * Problem 06 - replace-key
 *
 * Context:
 *   API 응답이나 DB 모델을 타입으로 정의할 때,
 *   특정 필드의 타입만 교체해야 할 때가 자주 있습니다.
 *   (예: id를 string → number로 바꾸거나, password를 제거/변경 등)
 *
 * Goal:
 *   ReplaceKey<T, K, V>를 구현하세요.
 *   - 객체 타입 T에서 키 K의 타입을 V로 교체합니다.
 *   - K는 반드시 T의 키여야 합니다.
 *   - 나머지 키들은 그대로 유지되어야 합니다.
 *
 * Example:
 *   type User = { id: string; name: string; email: string };
 *   type R1 = ReplaceKey<User, "id", number>;
 *   // 기대: { id: number; name: string; email: string }
 *
 *   type R2 = ReplaceKey<User, "email", boolean>;
 *   // 기대: { id: string; name: string; email: boolean }
 */

// ❌ 초기 상태 (실패하도록 유지)
export type ReplaceKey<T, K extends keyof T, V> = {
  [P in keyof T]: P extends K ? V : T[P];
};

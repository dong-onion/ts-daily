/**
 * Problem 05 - PartialBy
 *
 * Context:
 *   실무에서는 특정 필드만 선택적으로 입력받고 싶을 때가 많습니다.
 *   예: 회원 수정 폼에서는 email만 선택 입력으로 바꾸고 싶다 등.
 *
 * Goal:
 *   PartialBy<T, K>를 구현하세요.
 *   - 제네릭 T의 프로퍼티 중 K 키들만 optional로 바꿔야 합니다.
 *   - 나머지 키는 기존 그대로 유지되어야 합니다(타입/옵셔널 여부 보존).
 *   - K는 반드시 T의 키여야 합니다.
 *
 * Example:
 *   type User = { id: string; name: string; email: string; age?: number };
 *   type U1 = PartialBy<User, "email">;
 *   // 기대: { id: string; name: string; email?: string; age?: number }
 *
 *   type U2 = PartialBy<User, "name" | "age">;
 *   // 기대: { id: string; name?: string; email: string; age?: number }
 */

// ❌ 초기 상태 (실패하도록 유지)
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

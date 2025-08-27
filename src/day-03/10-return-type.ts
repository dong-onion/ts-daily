/**
 * Problem 10 - return-type
 *
 * Context:
 *   API, 유틸 함수, 훅 등에서 "이 함수가 어떤 값을 반환하는지"를
 *   타입으로 추출해야 하는 상황이 자주 있습니다.
 *
 * Goal:
 *   - MyReturnType<T>를 구현하세요.
 *     1) T는 함수 타입이어야 합니다.
 *     2) 함수의 반환 타입을 추출해 반환합니다.
 *     3) 함수가 아니면 never를 반환합니다.
 *
 * Example:
 *   type F1 = () => number;
 *   type F2 = (x: string) => Promise<boolean>;
 *
 *   type R1 = MyReturnType<F1>; // number
 *   type R2 = MyReturnType<F2>; // Promise<boolean>
 *   type R3 = MyReturnType<string>; // never
 */

// ❌ 초기 상태(실패하도록 유지)
export type MyReturnType<T> = T extends (...args: any) => infer U ? U : never;

/**
 * Problem 09 - awaited-promise
 *
 * Context:
 *   서비스 전역에서 비동기 유틸을 많이 쓰다 보니,
 *   Promise로 감싸진 값의 "실제 결과 타입"을 안전하게 얻는 유틸이 필요합니다.
 *
 * Goal:
 *   - AwaitedLike<T>를 구현하세요.
 *     1) T가 PromiseLike<U>이면 U를 꺼냅니다.
 *     2) 중첩 Promise도 풀려야 합니다 (Promise<Promise<U>> → U).
 *     3) 그 외에는 T 그대로.
 *
 * Notes:
 *   - 내장 유틸 `Awaited<T>`가 있지만, 직접 구현해 보며 동작을 이해합니다.
 *   - PromiseLike는 thenable을 의미합니다.
 */

// ❌ 초기 상태(실패하도록 유지)
export type AwaitedLike<T> = T extends PromiseLike<infer U>
  ? AwaitedLike<U>
  : T;

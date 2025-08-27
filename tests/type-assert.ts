export type Expect<T extends true> = T;

// 표준 Equal 구현
export type Equal<X, Y> = (<T>() => T extends X ? 1 : 2) extends <
  T
>() => T extends Y ? 1 : 2
  ? true
  : false;

// 교차 타입(&)이나 매핑 결과를 한 번 펼쳐 "표면 형태"를 정리
export type Prettify<T> = { [K in keyof T]: T[K] } & {};

// (선택) 표면 형태에 덜 민감한 동치 비교
export type Extends<A, B> = [A] extends [B] ? true : false;
export type Equivalent<A, B> = Extends<A, B> extends true
  ? Extends<B, A> extends true
    ? true
    : false
  : false;

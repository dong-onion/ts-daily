/**
 * Problem 01 - filter-string
 *
 * Context:
 *  런타임 데이터에서 string만 골라내듯, 타입 레벨에서도
 *  "string 계열만 남기고 나머지는 버리는" 유틸이 필요합니다.
 *
 * Goal:
 *  FilterString<T>를 구현하세요.
 *  - T가 string 또는 string literal이면 그대로 T
 *  - 그 외 타입이면 never
 *
 * Notes:
 *  - 유니언에 대해 분배되어 동작해야 합니다.
 *    예) FilterString<string | number> -> string
 */

// ❌ 초기 상태(실패하도록 유지)
export type FilterString<T> = T extends string ? T : never;

// 사용 예시(참고용)
type A = FilterString<string>; // string
type B = FilterString<number>; // never
type C = FilterString<"hello">; // "hello"
type D = FilterString<boolean>; // never
type E = FilterString<string | 1>; // string

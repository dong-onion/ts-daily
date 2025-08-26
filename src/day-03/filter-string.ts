// ❌ 아래의 FilterString 타입을 완성하세요
// T가 string 타입이면 그대로, 아니면 never가 되도록 구현해야 합니다

export type FilterString<T> = T extends string ? T : never;

type A = FilterString<string>; // ✅ string
type B = FilterString<number>; // ❌ never
type C = FilterString<"hello">; // ✅ "hello"
type D = FilterString<boolean>; // ❌ never

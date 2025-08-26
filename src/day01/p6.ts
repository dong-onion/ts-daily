// ❌ 아래 조건부 타입을 완성하세요
type ElementType<T> = T extends Array<infer U> ? U : T;

type A = ElementType<string[]>; // ✅ string
type B = ElementType<number[]>; // ✅ number
type C = ElementType<boolean>; // ✅ boolean (그대로 반환)

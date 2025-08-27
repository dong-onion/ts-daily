import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { MyReturnType } from "./10-return-type.ts";

// 함수의 반환 타입 추출
type F1 = () => number;
type F2 = (x: string) => Promise<boolean>;

type R1 = MyReturnType<F1>;
type R1_Expected = number;
type _1 = Expect<Equal<R1, R1_Expected>>;

type R2 = MyReturnType<F2>;
type R2_Expected = Promise<boolean>;
type _2 = Expect<Equal<R2, R2_Expected>>;

// 함수가 아니면 never
type R3 = MyReturnType<string>;
type R3_Expected = never;
type _3 = Expect<Equal<R3, R3_Expected>>;

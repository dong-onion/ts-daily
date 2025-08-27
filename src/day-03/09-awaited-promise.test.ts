import type { Expect, Equal } from "../../tests/type-assert.ts";
import type { AwaitedLike } from "./09-awaited-promise.ts";

// 기본값: Promise 해제
type _1 = Expect<Equal<AwaitedLike<Promise<number>>, number>>;
type _2 = Expect<Equal<AwaitedLike<Promise<"ok">>, "ok">>;

// 중첩 Promise 해제
type _3 = Expect<Equal<AwaitedLike<Promise<Promise<boolean>>>, boolean>>;

// thenable(PromiseLike)도 지원
type Thenable<T> = { then(onFulfilled: (v: T) => any): any };
type _4 = Expect<Equal<AwaitedLike<Thenable<{ id: string }>>, { id: string }>>;

// Promise가 아니면 그대로
type _5 = Expect<Equal<AwaitedLike<string>, string>>;
type _6 = Expect<Equal<AwaitedLike<42>, 42>>;

// 내장 Awaited와 동치성 체크(참고)
type _7 = Expect<Equal<AwaitedLike<Promise<Date>>, Awaited<Promise<Date>>>>;

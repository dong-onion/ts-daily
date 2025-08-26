type Profile = {
  id: number;
  name: string;
  email: string;
};

// ❌ ReadonlyProfile은 모든 속성이 읽기 전용이어야 합니다
type ReadonlyProfile = {
  readonly [K in keyof Profile]: Profile[K];
};

const p: ReadonlyProfile = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
};

p.name = "Bob"; // ❌ 이 줄은 타입 에러가 나야 합니다

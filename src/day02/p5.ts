const user = {
  id: 1,
  name: "Alice",
  email: "alice@example.com",
} as const;

// ❌ UserKeys는 user 객체의 key들을 유니언 타입으로 가져와야 합니다
type UserKeys = keyof typeof user;

const k1: UserKeys = "id"; // ✅
const k2: UserKeys = "email"; // ✅
const k3: UserKeys = "age"; // ❌ 타입 에러가 나야 합니다

type User = {
  id: string;
  name: string;
  email: string;
  nickname: string;
};

// ❌ SafeUser는 nickname을 제외한 타입이어야 함
type SafeUser = Omit<User, "nickname">;

const user: SafeUser = {
  id: "u1",
  name: "Alice",
  email: "alice@example.com",
  nickname: "ali", // ❌ 이 줄은 타입 에러가 나야 합니다
};

type PartialUser = {
  id?: number;
  name?: string;
};

// ❌ FixedUser는 모든 속성이 필수여야 합니다
type FixedUser = Required<PartialUser>;

const user1: FixedUser = {
  id: 1,
  name: "Alice",
};

const user2: FixedUser = {
  id: 2,
}; // ❌ 타입 에러가 나야 합니다 (name이 빠져 있음)

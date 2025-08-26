type User = {
  id: string;
  name: string;
  email: string;
  nickname: string;
};

// ❌ ContactInfo 타입을 User에서 name과 email만 가지도록 수정하세요
type ContactInfo = Pick<User, "name" | "email">;

const contactInfo: ContactInfo = {
  name: "Alice",
  email: "alice@example.com",
  id: "should not be here", // ❌ 이 줄은 에러가 나야 합니다
  nickname: "ali", // ❌ 이 줄도 에러가 나야 합니다
};

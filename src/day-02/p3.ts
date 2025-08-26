type UserRole = "admin" | "user" | "guest";

// ❌ GuestRole은 "guest"만 남아야 합니다
type GuestRole = Exclude<UserRole, "admin" | "user">;

const r1: GuestRole = "guest"; // ✅
const r2: GuestRole = "user"; // ❌ 타입 에러가 나야 합니다

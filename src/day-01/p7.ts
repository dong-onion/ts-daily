type UserRole = "admin" | "user" | "guest";

// ❌ NonAdminRole은 "admin"을 제외한 타입으로 정의되어야 함
type NonAdminRole = Exclude<UserRole, "admin">;

const r1: NonAdminRole = "user"; // ✅
const r2: NonAdminRole = "guest"; // ✅
const r3: NonAdminRole = "admin"; // ❌ 타입 에러가 나야 함

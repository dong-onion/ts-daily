// 역할은 admin, editor, viewer로 제한해야 합니다
type Role = "admin" | "editor" | "viewer";

// ❌ Permissions 타입을 정확히 제한하세요
type Permissions = Record<Role, Array<"read" | "write" | "delete">>;

const permissions: Permissions = {
  admin: ["read", "write", "delete"],
  editor: ["read", "write"],
  viewer: ["read"],
  guest: ["read"], // ❌ 이 줄은 타입 에러가 나야 합니다
};

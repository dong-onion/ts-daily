/**
 * Problem 02 - public-user
 *
 * Context:
 *  백엔드의 User 타입을 클라이언트에 노출할 때,
 *  민감 정보는 제거하고 일부 필드는 선택적(optional)로 유지해야 합니다.
 *
 * Goal:
 *  PublicUser 타입을 구현하세요.
 *  - 제거할 비공개 필드: "password", "ssn"
 *  - optional 유지 대상: "phone", "address"
 *
 * Notes:
 *  - 기존 User의 선택적 필드는 그대로 optional 유지되어야 합니다.
 *  - 키 누락/초과가 없도록 정확히 모델링하세요.
 */

export type User = {
  id: string;
  email: string;
  name: string;
  phone?: string;
  address?: string;
  password: string;
  ssn: string;
};

// ❌ 초기 상태(실패하도록 유지)
export type PublicUser = Omit<User, "password" | "ssn">;

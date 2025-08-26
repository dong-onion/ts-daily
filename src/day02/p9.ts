const errorMessages = {
  notFound: "Resource not found",
  unauthorized: "Unauthorized access",
  serverError: "Internal server error",
} as const;

// ❌ ErrorMessage 타입은 errorMessages의 value들을 유니언 타입으로 가져와야 합니다
type ErrorMessage = (typeof errorMessages)[keyof typeof errorMessages];

const e1: ErrorMessage = "Unauthorized access"; // ✅
const e2: ErrorMessage = "Forbidden"; // ❌ 타입 에러가 나야 합니다

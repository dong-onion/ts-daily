const toastTypes = {
  info: "INFO",
  success: "SUCCESS",
  error: "ERROR",
  warning: "WARNING",
} as const;

// ❌ ToastType은 toastTypes 객체의 value들을 유니언 타입으로 가져와야 합니다
type ToastType = (typeof toastTypes)[keyof typeof toastTypes];

const t1: ToastType = "SUCCESS"; // ✅
const t2: ToastType = "ERROR"; // ✅
const t3: ToastType = "FAILURE"; // ❌ 타입 에러가 나야 합니다

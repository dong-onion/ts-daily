const colors = {
  primary: "#3498db",
  secondary: "#2ecc71",
  danger: "#e74c3c",
} as const;

// ColorValue는 위 객체의 값들만 가능한 타입이어야 합니다
type ColorValue = (typeof colors)[keyof typeof colors];

const c1: ColorValue = "#3498db"; // ✅
const c2: ColorValue = "#e74c3c"; // ✅
const c3: ColorValue = "#000000"; // ❌ 타입 에러가 나야 합니다

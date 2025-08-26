interface Settings {
  darkMode: boolean;
  notifications: boolean;
  autoSave: boolean;
  betaFeatures: boolean;
}

// ❌ EssentialSettings는 darkMode와 autoSave 속성만 포함해야 합니다
type EssentialSettings = Pick<Settings, "darkMode" | "autoSave">;

// 테스트 코드
const config1: EssentialSettings = {
  darkMode: true,
  autoSave: true, // ✅ 있어야 함
};

const config2: EssentialSettings = {
  darkMode: true,
}; // ❌ 타입 에러가 나야 합니다 (autoSave 누락)

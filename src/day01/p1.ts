// 요구사항:
// - Settings 타입의 모든 필드를 읽기 전용으로 만들어야 함

type Settings = Readonly<{
  darkMode: boolean;
  autoSave: boolean;
}>;

const config: Settings = {
  darkMode: true,
  autoSave: false,
};

config.darkMode = false; // ❌ 이 줄에서 에러가 나야 함 (읽기 전용)

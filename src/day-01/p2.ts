type Settings = {
  darkMode: boolean;
  autoSave: boolean;
};

type Partial<T> = {
  [K in keyof T]?: T[K];
};

// ❌ 수정이 필요한 부분
type DraftSettings = Partial<Settings>;

const draft: DraftSettings = {};
draft.darkMode = true;
draft.autoSave = true;
draft.nonExisting = 123; // ❌ 이 줄은 타입 에러가 나야 합니다

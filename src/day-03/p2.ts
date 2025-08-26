const keys = ["home", "about", "contact"];

// 아래 타입을 올바르게 완성하세요
type Routes = Record<(typeof keys)[number], string>;

const validRoutes: Routes = {
  home: "/",
  about: "/about",
  contact: "/contact", // ✅ 모두 포함해야 합니다
};

const invalidRoutes: Routes = {
  home: "/",
  contact: "/contact",
}; // ❌ 타입 에러가 나야 합니다 (about 누락)

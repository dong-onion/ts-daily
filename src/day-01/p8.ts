	

⸻
type AllTags = "div" | "input" | "button" | "select" | "textarea";

// ❌ input 또는 textarea만 남도록 타입을 완성하세요
type InputLikeTag = Extract<AllTags, "input" | "textarea">;

const t1: InputLikeTag = "input"; // ✅
const t2: InputLikeTag = "textarea"; // ✅
const t3: InputLikeTag = "div"; // ❌ 타입 에러가 나야 함
const t4: InputLikeTag = "select"; // ❌ 타입 에러가 나야 함

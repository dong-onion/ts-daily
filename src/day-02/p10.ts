const statusList = ["idle", "loading", "success", "error"] as const;

// ❌ Status 타입은 statusList 배열의 요소들을 유니언 타입으로 가져와야 합니다
type Status = (typeof statusList)[number];

const s1: Status = "idle"; // ✅
const s2: Status = "success"; // ✅
const s3: Status = "failed"; // ❌ 타입 에러가 나야 합니다

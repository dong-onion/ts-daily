// 문제:
// 아래와 같은 형태의 데이터를 받아서
// 각 항목의 'value' 값만 모은 유틸리티 타입을 정의하세요

type Data = [
  { label: "이름"; value: string },
  { label: "나이"; value: number },
  { label: "이메일"; value: string }
];

// ✅ Desired: string | number

type ValuesOnly<T extends readonly { value: any }[]> = T[number]["value"];

type Result = ValuesOnly<Data>;

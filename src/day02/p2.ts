type Animal = {
  species: string;
  legs: number;
};

// ❌ ReadonlyAnimal은 모든 속성이 읽기 전용이어야 합니다
type ReadonlyAnimal = Readonly<Animal>;

const dog: ReadonlyAnimal = {
  species: "dog",
  legs: 4,
};

dog.legs = 3; // ❌ 이 줄은 타입 에러가 나야 합니다

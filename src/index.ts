interface Dog {
  name: string;
  age: number;
}
interface Cat {
  name: string;
  breed: string;
}
type DogCat = Dog | Cat;
function isDog(a: DogCat): a is Dog {
  return (a as Dog).age !== undefined;
}

const pp: DogCat = { name: "멍멍이", age: 10 };
const cc: DogCat = { name: "멍멍이", breed: "삼" };

if (isDog(pp)) {
  // Dog라는 코드 진행
  pp; // const PP: Dog
} else {
  // Cat이라는 코드 진행
}

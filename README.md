# ts 심화 - Union

- 타입을 하나로 병합할 수 있는 방법

```ts
type StringNumberType = string | number;

let strVar: StringNumberType = "hi";
strVar = 300;

type NetworkStatus = "DONE" | "LOADING" | "ERROR" | "INIT";
let state: NetworkStatus = "DONE";
state = "ERROR";
state = "LOADING";
state = "INIT";

type StringNumberArray = string[] | number[];
let arr: StringNumberArray = [1, 2, 3];
arr = ["hello", "hi"];
```

```js
interface Animal {
  name: string;
  age: number;
}
interface Human {
  name: string;
  age: number;
  address: string;
}

type AnimalHuman = Animal | Human;
/**
 * 하나의 타입으로 합쳐진다.
 * {
 *  name: string;
 *  age: number;
 *  address: string;
 * }
 * */
const temp: AnimalHuman = {
  address: "대구",
  age: 20,
  name: "제니",
};
```

- type 여러개도 union

```ts
type Animal = {
  name: string;
  age: number;
};
type Human = {
  name: string;
  age: number;
  address: string;
};

type AnimalHuman = Animal | Human;
/**
 * 여러개의 타입을 하나로 합침
 * {
 *  name: string;
 *  age: number;
 *  address: string;
 * }
 */
const temp: AnimalHuman = {
  address: "대구",
  age: 20,
  name: "제니",
};
```

# ts 심화 - Intersection

- 여러개의 타입을 모두 만족하는 타입을 만든다.

```ts
interface Human {
  name: string;
  age: number;
}
interface Contacts {
  phone: string;
  address: string;
}
type HumanContacts = Human & Contacts;
// 반드시 모든 속성이 존재해야 한다.
let jeny: HumanContacts = {
  address: "서울",
  age: 28,
  name: "제니",
  phone: "000",
};
```

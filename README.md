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

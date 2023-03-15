//* 유니언 타입
let mathematician = Math.random() > 0.5 ? undefined : "Mark Goldberg";

//* 유니언 타입 선언
let thinker: string | null = null;

if (Math.random() > 0.5) {
  thinker = "Susanne Langer";
}

//* 유니언 속성
let physicist = Math.random() > 0.5 ? "Marie Curie" : 84;
physicist.toString();
// physicist.toUpperCase(); // Error
// physicist.toFixed(); // Error

//* 값 할당을 통한 내로잉 : 할당된 값의 타입으로 좁히는 방법
let admiral: number | string;

admiral = "Grace Hopper";
admiral.toUpperCase();
// admiral.toFixed(); Error

let inventor: number | string = "Hedy Lamarr";
inventor.toUpperCase();
// inventor.toFixed(); Error

//* 조건 검사를 통한 내로잉 : if 문을 통해 변수의 값을 좁히는 방법
let scientist = Math.random() > 0.5 ? "Rosalind Franklin" : 51;

if (scientist === "Rosalind Franklin") {
  scientist.toUpperCase();
}

// scientist.toUpperCase(); // Error

//* typeof 검사를 통한 내로잉
let researcher = Math.random() > 0.5 ? "Rosalind Franklin" : 51;
if (typeof researcher === "string") {
  researcher.toUpperCase();
}
if (!(typeof researcher === "string")) {
  researcher.toFixed();
}

typeof researcher === "string"
  ? researcher.toUpperCase()
  : researcher.toFixed();

//* 리터럴 타입 : 특정 원시값
const mathematician2 = "Mark Goldberg";

//* 엄격한 null 검사
let nameMaybe = Math.random() > 0.5 ? "Tony Hoare" : undefined;
// nameMaybe.toLowerCase();

//* 참 검사를 통한 내로잉
let geneticist = Math.random() > 0.5 ? "Barbara McClintock" : undefined;

if (geneticist) {
  geneticist.toUpperCase();
}

//* 초기값이 없는 변수
let mathematician3: string | undefined;
mathematician3?.length;

mathematician3 = "Mark Goldberg";
mathematician3.length;

//* 타입 별칭

type RawData = boolean | number | string | null | undefined;

let rawDataFirst: RawData;
let rawDataSecond: RawData;
let rawDataThird: RawData;

//* 타입 별칭은 자바스크립트가 아닙니다.
type SomeType = string | undefined;
// console.log(SomeType); // Error

//* 타입 별칭 결합
type Id = number | string;
type IdMaybe = Id | undefined | null;

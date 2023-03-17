{
  let arrayOfNumbers: number[];
  arrayOfNumbers = [4, 8, 15, 16, 23, 42];
}

{
  //* 배열과 함수 타입
  let createStrings: () => string[];
  let stringCreators: (() => string)[];
}

{
  //* 유니언 타입 배열
  let stringOrArrayOfNumbers: string | number[];
  let arrayOfStringOrNumbers: (string | number)[];

  const namesMaybe = ["Aqualtune", "Blenda", undefined];
}

{
  //* any 배열의 진화
  let values = [];
  values.push("");
  values[0] = 0;
}

{
  //* 다차원 배열
  let arrayOfArraysOfNumbers: number[][];

  arrayOfArraysOfNumbers = [
    [1, 2, 3],
    [2, 4, 6],
    [3, 6, 9],
  ];
}

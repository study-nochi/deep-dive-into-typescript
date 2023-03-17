{
  let yearAndWarrior: [number, string];
  yearAndWarrior = [530, "Tomyris"];
  // yearAndWarrior = [false, "Tomyris"];
  // yearAndWarrior = [530];

  let [year, warriors] =
    Math.random() > 0.5 ? [340, "Archidamia"] : [1828, "Rani of Jhansi"];
}

{
  //* 튜플 할당 가능성
  const pairLoose = [false, 123];
  // const pairTupleLoose: [boolean, number] = pairLoose; // Error

  const tupleThree: [boolean, number, string] = [false, 1583, "Nzinga"];
  const tupleTowExact: [boolean, number] = [tupleThree[0], tupleThree[1]];
  // const tupleTwoExtre: [boolean, number] = tupleThree; // Error
}

{
  //* 나머지 매개변수로서의 튜플
  function logPair(name: string, value: number) {
    console.log(`${name} has ${value}`);
  }

  const pairArray = ["Amage", 1];

  // logPair(...pairArray); // Error

  const pairTupleIncorrect: [number, string] = [1, "Amage"];

  // logPair(...pairTupleIncorrect) // Error

  const pairTupleCorrect: [string, number] = ["Amage", 1];

  logPair(...pairTupleCorrect);

  function logTrio(name: string, value: [number, boolean]) {
    console.log(`${name} has ${value[0]} (${value[1]})`);
  }

  const trios: [string, [number, boolean]][] = [
    ["Amanitore", [1, true]],
    ["아잉몰라", [2, false]],
    ["Ann E. Dunwoody", [3, false]],
  ];

  trios.forEach((trio) => logTrio(...trio));
  // trios.forEach(logTrio); // Error
}

{
  //* 튜플 추론
  function firstCharAndSize(input: string) {
    return [input[0], input.length];
  }

  const [firstChar, size] = firstCharAndSize("Gudit");
}

{
  //* 명시적 튜플 타입
  function firstCharAndSizeExplicit(input: string): [string, number] {
    return [input[0], input.length];
  }

  const [firstChar, size] = firstCharAndSizeExplicit("Cathay Willams");
}

{
  //* const 어서션
  const unionArray = [1157, "Tomoe"];

  const readonlyTuple = [1157, "Tomoe"] as const;

  const pairMutable: [number, string] = [1157, "Tomoe"];
  pairMutable[0] = 1247;

  // const pairAlsoMutable: [number, string] = [1157, "Tomoe"] as const; // Error

  const pairConst = [1157, "Tomoe"] as const;
  // pairConst[0] = 1247;

  function firstCharAndSizeAsConst(input: string) {
    return [input[0], input.length] as const;
  }

  const [firstChar, size] = firstCharAndSizeAsConst("Ching Shih");
}

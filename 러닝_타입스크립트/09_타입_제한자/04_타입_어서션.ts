{
  const rawData = '["grace", "frankie"]';

  JSON.parse(rawData);

  JSON.parse(rawData) as [string, string];

  JSON.parse(rawData) as ["grace", "franke"];
}

{
  //* 포착된 오류 타입 어서션
  try {
    const a = 1 / 0;
  } catch (error) {
    console.warn("Oh no!", error instanceof Error ? error.message : error);
  }
}

{
  //* non-null 어서션
  let maybeDate = Math.random() > 0.5 ? undefined : new Date();

  maybeDate as Date;

  maybeDate!;

  const seasonCounts = new Map([
    ["I Love Lucy", 6],
    ["The Golden Girls", 7],
  ]);

  const maybeValue = seasonCounts.get("I Love Lucy");

  //! console.log(maybeValue.toFixed())

  const knownValue = seasonCounts.get("I Love Lucy")!;
  console.log(knownValue.toFixed());
}

{
  //* 타입 어서션 주의 사항
  const seasonCounts = new Map([
    ["Broad City", 5],
    ["Community", 6],
  ]);

  const knownValue = seasonCounts.get("I Love Lucy")!;

  console.log(knownValue.toFixed());
}

{
  //* 어서션 vs 선언
  interface Entertainer {
    acts: string[];
    name: string;
  }

  //! Error
  // const declared: Entertainer = {
  //   name: "Moms Mabley",
  // };

  //! 런타임 시 오류 발생
  const asserted = {
    name: "Moms Mabley",
  } as Entertainer;

  //! console.log(declare.acts.join(", "));
  //! 런타임 시 오류 발생
  console.log(asserted.acts.join(", "));
}

{
  //* 어서션 할당 사능성
  //! let myValue = "Stella!" as number;

  //! 허용되지만 이렇게 사용하면 안됨
  let myValueDouble = "1337" as unknown as number;
}

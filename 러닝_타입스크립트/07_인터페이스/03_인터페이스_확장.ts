{
  interface Writing {
    title: string;
  }

  interface Novella extends Writing {
    pages: number;
  }

  let myNovella: Novella = {
    pages: 195,
    title: "Ethan Frome",
  };

  //! Error
  // let missingPAges: Novella = {
  //   title: "The Awakening",
  // };

  //! Error
  // let extraProperty: Novella = {
  //   pages: 300,
  //   strategy: "baseline",
  //   style: "Naturalism",
  // };
}

{
  //* 재정의된 속성
  interface WithNullableName {
    name: string | null;
  }

  interface WithNonNullableName extends WithNullableName {
    name: string;
  }

  //! Error
  // interface WithNumbericName extends WithNullableName {
  //   name: number | string;
  // }
}

{
  //* 다중 인터페이스 확장
  interface GivesNumber {
    giveNumber(): number;
  }

  interface GivesString {
    giveString(): string;
  }

  interface GivesBothAndEither extends GivesNumber, GivesString {
    giveEither(): number | string;
  }

  function useGivesBoth(instance: GivesBothAndEither) {
    instance.giveEither();
    instance.giveNumber();
    instance.giveString();
  }
}

{
  //* 인터페이스 병합
  interface Merged {
    fromFirst: string;
  }

  interface Merged {
    fromSecond: number;
  }
}

interface Window {
  myEnvironmentVariable: string;
}

window.myEnvironmentVariable;

{
  //* 이름이 충돌되는 멤버
  interface MergedProperties {
    same: (input: boolean) => string;
    different: (input: string) => string;
  }

  interface MergedProperties {
    same: (input: boolean) => string;
    //! Error
    // different: (input: number) => string;
  }

  interface MergedMethods {
    different(input: string): string;
  }
  interface MergedMethods {
    different(input: number): string;
  }
}

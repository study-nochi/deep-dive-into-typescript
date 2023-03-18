{
  //* 선택적 속성
  interface Book {
    author?: string;
    pages: number;
  }

  const ok: Book = {
    author: "Rita Dove",
    pages: 80,
  };

  const missing: Book = {
    pages: 80,
  };
}

{
  //* 읽기 전용 속성
  interface Page {
    readonly text: string;
  }

  function read(page: Page) {
    console.log(page.text);

    // page.text += "!" // Error
  }

  const pageIsh = {
    text: "Hello, world",
  };

  pageIsh.text += "!";

  read(pageIsh);
}

{
  //* 함수와 메서드
  interface HasBothFunctionTypes {
    property: () => string;
    method(): string;
  }

  const hasBoth: HasBothFunctionTypes = {
    property: () => "",
    method() {
      return "";
    },
  };

  hasBoth.property();
  hasBoth.method();

  interface OptionalReadonlyFunctions {
    optionalProperty?: () => string;
    optionalMethod(): string;
  }
}

{
  //* 호출 시그니처
  type FunctionAlias = (input: string) => number;

  interface CallSignature {
    (input: string): number;
  }

  const typeFunctionAlias: FunctionAlias = (input) => input.length;
  const typeCallSignature: CallSignature = (input) => input.length;

  interface FunctionWithCount {
    count: number;
    (): void;
  }

  let hasCallCount: FunctionWithCount;

  function keepsTrackOfCalls() {
    keepsTrackOfCalls.count += 1;
    console.log(`I've been called ${keepsTrackOfCalls.count} times!`);
  }

  keepsTrackOfCalls.count = 0;

  hasCallCount = keepsTrackOfCalls;

  function doesNotHaveCount() {
    console.log("No idea!");
  }

  // hasCallCount = doesNotHaveCount;
}

{
  //* 인덱스 시그니처
  interface WordCounts {
    [i: string]: number;
  }

  const counts: WordCounts = {};

  counts.apple = 0;
  counts.banana = 1;

  // counts.cherry = false; // Error

  interface DatesByName {
    [i: string]: Date;
  }

  const publishDates: DatesByName = {
    Frankenstein: new Date("1 January 1818"),
  };

  publishDates.Frankenstein;
  console.log(publishDates.Frankenstein.toString());

  //! 런타임 시 에러 남.
  publishDates.Beloved;
  console.log(publishDates.Beloved.toString());
}

{
  //* 속성과 인덱스 시그니처 혼합
  interface HistoricalNovels {
    Oroonoko: number;
    [i: string]: number;
  }

  const novels: HistoricalNovels = {
    Outlander: 1991,
    Oroonoko: 1688,
  };

  // Error
  // const missingOroonoko: HistoricalNovels = {
  //   Outlander: 1991,
  // }

  interface ChapterStarts {
    preface: 0;
    [i: string]: number;
  }

  const correctPreface: ChapterStarts = {
    preface: 0,
    night: 1,
    shopping: 5,
  };

  // Error
  // const wrongPreface: ChapterStarts = {
  //   preface: 1,
  // };
}

{
  //* 숫자 인덱스 시그니처
  interface MoreNarrowNumbers {
    [i: number]: string;
    [i: string]: string | undefined;
  }

  const mixesNumbersAndStrings: MoreNarrowNumbers = {
    0: "",
    key1: "",
    key2: undefined,
  };

  interface MoreNarrowStrings {
    [i: number]: string | undefined;
    // [i: string]: string; // Error
  }
}

{
  //* 중첩 인터페이스
  interface Novel {
    author: {
      name: string;
    };
    setting: Setting;
  }

  interface Setting {
    place: string;
    year: number;
  }

  let myNovel: Novel;

  myNovel = {
    author: {
      name: "Jane Austen",
    },
    setting: {
      place: "England",
      year: 1812,
    },
  };

  // Error
  // myNovel = {
  //   author: {
  //     name: "Emily Bronte",
  //   },
  //   setting: {
  //     place: "West Yorkshire",
  //   },
  // };
}


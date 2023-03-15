{
  type WithFirstName = {
    firstName: string;
  };

  type WithLastName = {
    lastName: string;
  };

  const hasBoth = {
    firstName: "Lucille",
    lastName: "Clifton",
  };

  let withFirstNAme: WithFirstName = hasBoth;
  let withLastName: WithLastName = hasBoth;
}

//* 사용 검사
{
  type FirstAndLastNames = {
    first: string;
    last: string;
  };

  const hasBoth2: FirstAndLastNames = {
    first: "Sarojini",
    last: "Naidu",
  };

  // const hasOnlyone: FirstAndLastNames = {
  //   first: "Sappho",
  // }; // Error;

  type TimeRange = {
    start: Date;
  };

  // const hasStartString: TimeRange = {
  //   start: "1879-02-13",
  // };
}

//* 초과 속성 검사
type Poet2 = {
  born: number;
  name: string;
};

const poetMatch: Poet2 = {
  born: 1982,
  name: "Maya Angelou",
};

const extraProperty: Poet2 = {
  // activity: "walking"
  born: 1935,
  name: "Mary Oliver",
};

//* 중첩된 객체 타입
{
  type Poem = {
    author: Author;
    name: string;
  };

  type Author = {
    firstName: string;
    lastName: string;
  };

  const poemMatch: Poem = {
    author: {
      firstName: "Sylvia",
      lastName: "Plath",
    },
    name: "Lady Lazarus",
  };

  // const poemMismatch: Poem = {
  //   author: {
  //     name: "Sylvia Plath"
  //   },
  //   name: "Tulops"
  // }
}
//* 선택적 속성
{
  type Book = {
    author?: string;
    pages: number;
  };

  const ok: Book = {
    author: "Rita Dove",
    pages: 80,
  };

  // const missing: Book = {
  //   author: "Rita Dove",
  // };

  type Writers = {
    author: string | undefined;
    editor?: string;
  };

  const hasRequired: Writers = {
    author: undefined,
  };

  // const missingRequired: Writers = {};
}

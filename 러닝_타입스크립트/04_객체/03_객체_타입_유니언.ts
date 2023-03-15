//* 유추된 객체 타입 유니언
{
  const poem =
    Math.random() > 0.5
      ? {
          name: "The Double Image",
          pages: 7,
        }
      : {
          name: "Her Kind",
          rhymes: true,
        };

  poem.name;
  poem.pages;
  poem.rhymes;
}

{
  //* 명시된 객체 타입 유니언

  type PoemWithPages = {
    name: string;
    pages: number;
  };

  type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
  };

  type Poem = PoemWithPages | PoemWithRhymes;
  const poem: Poem =
    Math.random() > 0.5
      ? {
          name: "The Double Image",
          pages: 7,
        }
      : {
          name: "Her Kind",
          rhymes: true,
        };
  poem.name;
  // poem.pages; // Error
  // poem.rhymes; // Error

  //* 객체 타입 내로잉
  if ("pages" in poem) {
    poem.pages;
  } else {
    poem.rhymes;
  }

  // if(poem.pages) // Error
}

{
  //* 판별된 유니언
  type PoemWithPages = {
    name: string;
    pages: number;
    type: "pages";
  };

  type PoemWithRhymes = {
    name: string;
    rhymes: boolean;
    type: "rhymes";
  };

  type Poem = PoemWithPages | PoemWithRhymes;

  const poem: Poem =
    Math.random() > 0.5
      ? {
          name: "The Double Image",
          pages: 7,
          type: "pages",
        }
      : {
          name: "Her Kind",
          rhymes: true,
          type: "rhymes",
        };

  if (poem.type === "pages") {
    console.log(`It's got pages: ${poem.pages}`);
  } else {
    console.log(`It rhymes: ${poem.rhymes}`);
  }

  poem.type;

  // poem.pages; // Error
}

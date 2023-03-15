{
  type Artwokr = {
    genre: string;
    name: string;
  };

  type Writing = {
    pages: number;
    name: string;
  };

  type WrittenArt = Artwokr & Writing;
}

{
  type ShortPoem = { author: string } & (
    | { kigo: string; type: "haiku" }
    | { meter: number; type: "villanelle" }
  );

  const morningGlory: ShortPoem = {
    author: "Fukuda Chiyo-ni",
    kigo: "Morning Glory",
    type: "haiku",
  };

  // const oneArt: ShortPoem = {
  //   author: "Elizabeth Bishop",
  //   type: "villanelle",
  // };
}

{
  //* 교차 타입의 위험성

  //! 긴 할당 가능성 오류
  type ShortPoemBase = { author: string };
  type Haiku = ShortPoemBase & { kigo: string; type: "haiku" };
  type Villanelle = ShortPoemBase & { meter: number; type: "villanelle" };
  type ShortPoem = Haiku | Villanelle;

  // const oneArt: ShortPoem = {
  //   author: "Elizabeth Bishop",
  //   type: "villanelle",
  // };

  //! never
  type NotPossible = number & string;
  // let notNumber: NotPossible = 0; // Error
  // let notString: never = ""; // Error
}

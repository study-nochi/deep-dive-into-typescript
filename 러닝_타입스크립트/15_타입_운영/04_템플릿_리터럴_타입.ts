{
  type Greeting = `Hello${string}`;

  let matchs: Greeting = "Hello, world!";

  //! let outOfOrder: Greeting = "World! Hello";
  //! let missingAltogether: Greeting = "hi";
}

{
  type Brihtness = "dark" | "light";
  type Color = "blue" | "red";

  type BrightnessAndColor = `${Brihtness}-${Color}`;

  let colorOk: BrightnessAndColor = "dark-blue";
  //! let colorWrongStart: BrightnessAndColor = "medium-blue"
  //! let colorWrongEnd: BrightnessAndColor = "light-green"
}

{
  type ExtolNumber = `much ${number} wow`;

  function extol(extolee: ExtolNumber) {}

  extol("much 0 wow");
  extol("much -7 wow");
  extol("much 9.001 wow");

  //! extol("much false wow");
}

{
  //* 고유 문자열 조작 타입
  type FormalGreeting = Capitalize<"hello.">;
}

{
  //* 템플릿 리터럴 키
  type DataKey = "location" | "name" | "year";

  type ExistenceChecks = {
    [K in `check${Capitalize<DataKey>}`]: () => boolean;
  };

  function checkExistence(checks: ExistenceChecks) {
    checks.checkLocation();
    checks.checkName();
    //! checks.checkWrong()
  }
}

{
  //* 매핑된 타입 키 다시 매핑하기
  interface DataEntry<T> {
    key: T;
    value: string;
  }

  type DataKey = "location" | "name" | "year";

  type DataEntryGetters = {
    [K in DataKey as `get${Capitalize<K>}`]: () => DataEntry<K>;
  };
}

{
  const config = {
    location: "unknown",
    name: "anonymous",
    year: 0,
  };

  type LazyValues = {
    [K in keyof typeof config as `${K}Lazy`]: () => Promise<typeof config[K]>;
  };

  async function withLazyValues(configGetter: LazyValues) {
    await configGetter.locationLazy;
    //! await configGetter.missingLazy();
  }
}

{
  //! Error
  // type TurnIntoGettersDirect<T> = {
  //   [K in keyof T as `get${K}`]: () => T[K];
  // };
}

{
  const someSymbol = Symbol("");

  interface HasStringAndSymbol {
    StringKey: string;
    [someSymbol]: number;
  }

  type TurnIntoGetters<T> = {
    [K in keyof T as `get${string & K}`]: () => T[K];
  };

  type GettersJustString = TurnIntoGetters<HasStringAndSymbol>;
}

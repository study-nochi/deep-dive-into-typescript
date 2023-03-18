{
  type CheckStringAgainstNumber = string extends number ? true : false;
}

{
  //* 제네릭 조건부 타입
  type CheckAgainstNumber<T> = T extends number ? true : false;

  type CheckString = CheckAgainstNumber<"parakeet">;

  type CallbableSetting<T> = T extends () => any ? T : () => T;

  type GetNumbersSetting = CallbableSetting<() => number[]>;
  type StringSetting = CallbableSetting<string>;
}

{
  interface QueryOptions {
    throwIfNotFound: boolean;
  }

  type QueryResult<Options extends QueryOptions> =
    Options["throwIfNotFound"] extends true ? string : string | undefined;

  // declare function retrieve<Options extends QueryOptions>(
  //   key: string,
  //   options?: Options
  // ): Promise<QueryResult<Options>>;

  // await retrieve("이름")
  // await retrieve("이름")
  // await retrieve("이름")
}

{
  //* 타입 분산
  type ArrayifyUnlessString<T> = T extends string ? T : T[];

  type HalfArrayified = ArrayifyUnlessString<string | number>;
}

{
  //* 유추된 타입
  type ArrayItems<T> = T extends (infer Item)[] ? Item : T;

  type StringItem = ArrayItems<string>;

  type StringArrayItem = ArrayItems<string[]>;

  type String2DItem = ArrayItems<string[][]>;
}

{
  type ArrayItemsRecursive<T> = T extends (infer Item)[]
    ? ArrayItemsRecursive<Item>
    : T;

  type StringItem = ArrayItemsRecursive<string>;

  type StringArrayItem = ArrayItemsRecursive<string[]>;

  type String2DITem = ArrayItemsRecursive<string[][]>;
}

{
  //* 매핑된 조건부 타입
  type MakeAllMembersFunctions<T> = {
    [K in keyof T]: T[K] extends (...args: any[]) => any ? T[K] : () => T[K];
  };

  type MemberFunctions = MakeAllMembersFunctions<{
    alreadyFunction: () => string;
    notYetFunction: number;
  }>;
}

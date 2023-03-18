{
  type OnlyStrings<T> = T extends string ? T : never;

  type RedOrBlue = OnlyStrings<"red" | "blue" | 0 | false>;

  type FirstParameter<T extends (...args: any[]) => any> = T extends (
    arg: infer Arg
  ) => any
    ? Arg
    : never;
  type GetsString = FirstParameter<(arg0: string) => void>;
}

{
  type OnlyStringProperties<T> = {
    [K in keyof T]: T[K] extends string ? K : never;
  }[keyof T];

  interface AllEventData {
    participants: string[];
    location: string;
    name: string;
    year: number;
  }

  type OnlyStringEventData = OnlyStringProperties<AllEventData>;
}

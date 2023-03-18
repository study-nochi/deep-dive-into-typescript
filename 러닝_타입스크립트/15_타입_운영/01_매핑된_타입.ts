{
  type Animals = "alligator" | "baboon" | "cat";

  type AnimalCounts = {
    [K in Animals]: number;
  };

  interface BirdVariants {
    dove: string;
    eagle: boolean;
  }

  type NullableBirdVariants = {
    [K in keyof BirdVariants]: BirdVariants[K] | null;
  };
}

{
  //* 매핑된 타입과 시그니처
  interface Researcher {
    researchMethod(): void;
    researchProperty: () => string;
  }

  type JustProperties<T> = {
    [K in keyof T]: T[K];
  };

  type ResearcherProperties = JustProperties<Researcher>;
}

{
  //* 제한자 변경
  interface Environmentalist {
    area: string;
    name: string;
  }

  type ReadonlyEnvironmentalist = {
    readonly [K in keyof Environmentalist]: Environmentalist[K];
  };

  type OptionalReadonlyEnvironmentalist = {
    [K in keyof ReadonlyEnvironmentalist]?: ReadonlyEnvironmentalist[K];
  };

  interface Conservationlist {
    name: string;
    catchphrase?: string;
    readonly born: number;
    readonly died?: number;
  }

  type WritableConservationist = {
    -readonly [K in keyof Conservationlist]: Conservationlist[K];
  };

  type RequiredWritableConservationist = {
    [K in keyof WritableConservationist]-?: WritableConservationist[K];
  };
}

{
  //* 제네릭 매핑된 타입
  type MakeReadonly<T> = {
    readonly [K in keyof T]: T[K];
  };

  interface Species {
    genus: string;
    name: string;
  }

  type ReadonlySpecies = MakeReadonly<Species>;

  type MakeOptional<T> = {
    [K in keyof T]?: T[K];
  };

  interface GenusData {
    family: string;
    name: string;
  }

  function createGenusData(overrides?: MakeOptional<GenusData>): GenusData {
    return {
      family: "unknown",
      name: "unknown",
      ...overrides,
    };
  }
}

{
  class Secret<Key, Value> {
    key: Key;
    value: Value;

    constructor(key: Key, value: Value) {
      this.key = key;
      this.value = value;
    }

    getValue(key: Key): Value | undefined {
      return this.key === key ? this.value : undefined;
    }
  }

  const storage = new Secret(12345, "luggage");
  storage.getValue(1987);
}

{
  //* 명시적 제네릭 클래스 타입

  class CurriedCallback<Input> {
    #callback: (input: Input) => void;

    constructor(callback: (input: Input) => void) {
      this.#callback = (input: Input) => {
        console.log("Input:", input);
        callback(input);
      };
    }

    call(input: Input) {
      this.#callback(input);
    }
  }

  new CurriedCallback((input: string) => {
    console.log(input.length);
  });

  //! Error
  // new CurriedCallback((input) => {
  // console.log(input.length)
  // })

  new CurriedCallback<string>((input: string) => {
    console.log(input.length);
  });

  //! new CurriedCallback<string>((input: boolean) => {});
}

{
  //* 제네릭 클래스 확장
  class Quote<T> {
    lines: T;

    constructor(lines: T) {
      this.lines = lines;
    }
  }

  class SpokenQuote extends Quote<string[]> {
    speak() {
      console.log(this.lines.join("\n"));
    }
  }

  new Quote("the only real failure is the failure to try.").lines;
  new Quote([4, 8, 15, 16, 23, 42]).lines;

  new SpokenQuote(["Greed is so destructive", "It destory everything"]).lines;
  //! new SpokenQuote([4, 8, 15, 16, 23, 42]).lines;

  class AttributedQuote<Value> extends Quote<Value> {
    speaker: string;

    constructor(value: Value, speaker: string) {
      super(value);
      this.speaker = speaker;
    }
  }

  new AttributedQuote(
    "The road to success is always under construction.",
    "Lily Tomlin"
  );
}

{
  //* 제네릭 인터페이스 구현
  interface ActingCredit<Role> {
    role: Role;
  }

  class MoviePart implements ActingCredit<string> {
    role: string;
    speaking: boolean;

    constructor(role: string, speaking: boolean) {
      this.role = role;
      this.speaking = speaking;
    }
  }

  const part = new MoviePart("Miranda Priestly", true);
  part.role;

  //! Error
  // class IncorrectExtension implements ActingCredit<string> {
  // role: boolean;
  // }
}

{
  //* 메서드 제네릭
  class CreatePairFactory<Key> {
    key: Key;

    constructor(key: Key) {
      this.key = key;
    }

    createPair<Value>(value: Value) {
      return { key: this.key, value };
    }
  }

  const factory = new CreatePairFactory("role");

  const number = factory.createPair(10);

  const stringyPair = factory.createPair("Sophia");
}

{
  //* 정적 클래스 제네릭
  class BothLogger<OnInstance> {
    instanceLog(value: OnInstance) {
      console.log(value);
      return value;
    }

    static staticLog<OnStatic>(value: OnStatic) {
      //! let fromInstance: OnInstance;
      console.log(value);
      return value;
    }
  }

  const logger = new BothLogger<number[]>();
  logger.instanceLog([1, 2, 3]);

  BothLogger.staticLog([false, true]);

  BothLogger.staticLog<string>("You can't change the music of your soul.");
}

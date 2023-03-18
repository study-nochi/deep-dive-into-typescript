{
  function identity<T>(input: T) {
    return input;
  }

  const numeric = identity("me");
  const stringy = identity(123);
}

{
  const identity = <T>(input: T) => input;
  identity(123);
}

{
  //* 명시적 제네릭 호출 타입

  function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
      console.log("Input: ", input);
      callback(input);
    };
  }

  logWrapper((input: string) => {
    console.log(input.length);
  });

  logWrapper((input) => {
    //! console.log(input.length);
  });

  logWrapper<string>((input) => {
    console.log(input.length);
  });
}

{
  //* 다중 함수 타입 매개변수
  function makeTuple<First, Second>(first: First, second: Second) {
    return [first, second] as const;
  }

  let tuple = makeTuple(true, "abc");

  function makePair<Key, Value>(key: Key, value: Value) {
    return { key, value };
  }

  makePair("abc", 123);

  makePair<string, number>("abc", 123);
  makePair<"abc", 123>("abc", 123);

  //! makePair<string>("abc", 123);
}

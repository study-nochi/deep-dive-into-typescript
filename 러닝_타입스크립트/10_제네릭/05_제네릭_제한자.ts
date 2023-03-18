{
  //* 제네릭 기본값
  interface Quote<T = string> {
    value: T;
  }

  let explicit: Quote<number> = { value: 123 };
  let implicit: Quote = {
    value: "Be yourself. The world worships the original.",
  };
  //! let mismatch: Quote = {value: 123}
}

{
  interface KeyValuePair<Key, Value = Key> {
    key: Key;
    value: Value;
  }

  let allExplicit: KeyValuePair<string, number> = {
    key: "rating",
    value: 10,
  };

  let oneDefaulting: KeyValuePair<string> = {
    key: "rating",
    value: "ten",
  };

  //! let firstMissing: KeyValuePair = {};
}

{
  function inTheEnd<First, Second, Third = number, Fourth = string>() {}
  //! function inTheMiddle<First, Second = boolean, Third = number, Fourth>(){}
}

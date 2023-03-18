{
  function logInput<Input extends string>(input: Input) {
    console.log("Hi!", input);
  }
}

{
  //* 제네릭 명명 규칙
  function labelBox<Label, Value>(lable: Label, value: Value) {}
}

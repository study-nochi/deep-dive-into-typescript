{
  type Nullish<T> = T | null | undefined;

  type CreatesValue<Input, Output> = (input: Input) => Output;

  let creator: CreatesValue<string, number>;
  creator = (text) => text.length;
  //! creator = (text) => text.toUpperCase();
}

{
  //* 제네릭 판별된 유니언
  type Result<Data> = FailureResult | SuccessfulResult<Data>;

  interface FailureResult {
    error: Error;
    succeeded: false;
  }

  interface SuccessfulResult<Data> {
    data: Data;
    succeeded: true;
  }

  function handleResult(result: Result<string>) {
    if (result.succeeded) {
      console.log(`We did it! ${result.data}`);
    } else {
      console.error(`Awww... ${result.error}`);
    }

    //! result.data;
  }
}

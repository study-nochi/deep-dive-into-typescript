{
  //* void 반환 타입
  let songLogger: (song: string) => void;
  songLogger = (song) => {
    console.log(`${song}`);
  };

  songLogger("Heart of Glass");

  function returnsVoid() {
    return;
  }

  let lazyValue: string | undefined;

  //lazyValue = returnsVoid(); // Error

  const records: string[] = [];

  function saveRecords(newRecords: string[]) {
    newRecords.forEach((record) => records.push(record));
  }

  saveRecords(["21", "Come On Over", "The Bodyguard"]);
}

{
  //* never 반환 타입
  function fail(message: string): never {
    throw new Error(`Invariant failure: ${message}`);
  }

  function workWithUnsafeParam(param: unknown) {
    if (typeof param !== "string") {
      fail(`param should be a string, not ${typeof param}`);
    }

    param.toUpperCase();
  }
}

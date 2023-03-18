{
  //* Promise 생성
  class PromiseLike<Value> {
    constructor(
      executor: (
        resolve: (value: Value) => void,
        reject: (reason: unknown) => void
      ) => void
    ) {
      const resolvesUnknown = new Promise((resolve) => {
        setTimeout(() => resolve("Done!"), 1000);
      });

      const resolvesString = new Promise<string>((resolve) => {
        setTimeout(() => resolve("Done!"), 1000);
      });

      const textEventually = new Promise<string>((resolve) => {
        setTimeout(() => resolve("Done!"), 1000);
      });

      const lengthEventually = textEventually.then((text) => text.length);
    }
  }
}

{
  //* async 함수
  async function lengthAfterSecond(text: string) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return text.length;
  }

  async function lengthImmediately(text: string) {
    return text.length;
  }

  async function givePromiseForString(): Promise<string> {
    return "Done!";
  }

  //! Error
  // async function givesString(): string {
  //   return "Done!";
  // }
}

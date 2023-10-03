{
  interface Developer {
    name: string;
    skill: string;
  }

  class Person {
    name: string = "";
    skill: string = "";
  }

  let developer: Developer;
  let person: Person;
  developer = new Person();
}

{
  // 합수
  let add = function (a: number) {
    // ...
  };
  let sum = function (a: number, b: number) {
    // ...
  };
  sum = add;
}

{
  // 제네릭
  interface Empty<T> {}
  let empty1: Empty<string>;
  let empty2: Empty<number>;

  interface NotEmpty<T> {
    data: T;
  }
  let notEmpty1: NotEmpty<string>;
  let notEmpty2: NotEmpty<number>;
}

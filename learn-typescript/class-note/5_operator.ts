{
  function logMessage(value: string) {
    console.log(value);
  }

  logMessage("Hello");
}

{
  // 유니온 타입
  let seho: string | number | boolean;
  function logMessage(value: string | number) {
    if (typeof value === "number") {
      value.toLocaleString();
    }
    if (typeof value === "string") {
      value.toString();
    }
    throw new TypeError("value must be string or number");
  }
}

{
  interface Developer {
    name: string;
    skill: string;
  }

  interface Person {
    name: string;
    age: number;
  }

  function askSomeone(someone: Developer | Person) {
    someone.name;
  }

  function askSomeoneUnion(someone: Developer & Person) {
    someone.name;
    someone.age;
    someone.skill;
  }

  
}

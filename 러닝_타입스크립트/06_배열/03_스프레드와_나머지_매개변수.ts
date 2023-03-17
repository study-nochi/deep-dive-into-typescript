{
  //* 스프레드
  const soliders = ["Harriet Tubman", "Joan of Arc", "Khutulun"];

  const soliderAges = [90, 19, 45];

  const conjoined = [...soliders, ...soliderAges];
}

{
  //* 나머지 매개변수 스프레드

  function logWarriors(greeting: string, ...names: string[]) {
    for (const name of names) {
      console.log(`${greeting}, ${name}`);
    }
  }

  const warriors = ["Cathay Williams", "Lozen", "Nzinga"];

  logWarriors("Hello", ...warriors);

  const birthYears = [1844, 1840, 1583];

  // logWarriors("Born in", ...birthYears); // Error
}

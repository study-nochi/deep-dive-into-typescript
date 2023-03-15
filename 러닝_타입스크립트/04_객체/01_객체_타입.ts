const poet = {
  born: 1935,
  name: "Mary Oliver",
};

poet["born"];
poet.name;

// poet.end; // Error

//* 객체 타입 선언

{
  let poetLater: {
    born: number;
    name: string;
  };

  poetLater = {
    born: 1935,
    name: "Mary Oliver",
  };

  // poetLater = "Sappho"; // Error;
}

//* 별칭 객체 타입
{
  type Poet = {
    born: number;
    name: string;
  };

  let poetLater2: Poet;
  poetLater2 = {
    born: 1935,
    name: "Sara Teasdale",
  };

  // poetLater2 = "Emily Dickinson";
}

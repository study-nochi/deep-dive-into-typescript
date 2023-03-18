{
  //* any 다시 보기
  let anyValue: any;
  anyValue = "Lucille Ball";
  anyValue = 123;

  console.log(anyValue);

  function greetComedian(name: any) {
    console.log(`Announcing ${name.toUpperCase()}!`);
  }

  //! 런타입 에러 남
  greetComedian({ name: "Bea Arthur" });
}

{
  //* unknown
  function greetComedian(name: unknown) {
    //! console.log(`Announcing ${name.toUpperCase()}!`);
  }

  function greetComedianSafety(name: unknown) {
    if (typeof name === "string") {
      console.log(`Announcing ${name.toUpperCase()}!`);
    } else {
      console.log("Well, I'm off.");
    }
  }

  greetComedianSafety("Betty White");
  greetComedianSafety({});
}

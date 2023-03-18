{
  interface WithLength {
    length: number;
  }

  function logWithLength<T extends WithLength>(input: T) {
    console.log(`Length: ${input.length}`);
    return input;
  }

  logWithLength("No one can figure out your worth but you.");
  logWithLength([false, true]);
  logWithLength({ length: 123 });

  //! logWithLength(new Date());
}

{
  //* keyof와 제한된 타입 매개변수
  function get<T, Key extends keyof T>(container: T, key: Key) {
    return container[key];
  }

  const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
  };

  const favorite = get(roles, "favorite");
  const others = get(roles, "others");

  //! const missing = get(roles, "extras");
}

{
  function get<T>(container: T, key: keyof T) {
    return container[key];
  }

  const roles = {
    favorite: "Fargo",
    others: ["Almost Famous", "Burn After Reading", "Nomadland"],
  };

  const found = get(roles, "favorite");
}

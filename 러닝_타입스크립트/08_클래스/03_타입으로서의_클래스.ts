{
  class Teacher {
    sayHello() {
      console.log("Take chances, make mistakes, get messy!");
    }
  }

  let teacher: Teacher;

  teacher = new Teacher();

  //! Error
  // teacher = "Wahoo!"
}

{
  class SchoolBus {
    getAbilities() {
      return ["magic", "shapeshifting"];
    }
  }

  function withSchoolBus(bus: SchoolBus) {
    console.log(bus.getAbilities());
  }

  withSchoolBus(new SchoolBus());

  withSchoolBus({
    getAbilities: () => ["transmogrification"],
  });

  //! Error
  // withSchoolBus({
  //   getAbilities: () => 123,
  // });
}

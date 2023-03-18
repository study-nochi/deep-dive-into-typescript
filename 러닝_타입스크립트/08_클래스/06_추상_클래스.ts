{
  abstract class School {
    readonly name: string;

    constructor(name: string) {
      this.name = name;
    }

    abstract getStuduentTypes(): string[];
  }

  class Preschool extends School {
    getStuduentTypes(): string[] {
      return ["preschooler"];
    }
  }

  //! const Absence extends School {}

  let school: School;
  school = new Preschool("Sunnyside Daycare");
  //! school = new School("somewhere else");
}

{
  class Engineer {
    constructor(readonly area: string) {
      this.area = area;
      console.log(`I work in the ${area} area.`);
    }
  }

  new Engineer("mechanical").area;

  class NamedEngineer {
    fullName: string;

    constructor(name: string, public area: string) {
      this.fullName = `${name}, ${area} engineer`;
    }
  }
}

{
  interface Learner {
    name: string;
    study(hours: number): void;
  }

  class Student implements Learner {
    name: string;

    constructor(name: string) {
      this.name = name;
    }

    study(hours: number): void {
      for (let i = 0; i < hours; i += 1) {
        console.log("...studying...");
      }
    }
  }

  //! Error
  // class Slacker implements Learner {

  // }

  //! Error
  // class Student2 implements Learner {
  //   name;

  //   study(hours) {}
  // }
}

{
  //* 다중 인터페이스 구현
  interface Graded {
    grades: number[];
  }

  interface Reporter {
    report: () => string;
  }

  class ReportCard implements Graded, Reporter {
    grades: number[];

    constructor(grades: number[]) {
      this.grades = grades;
    }

    report() {
      return this.grades.join(", ");
    }
  }

  //! Error
  // class Empty implements Graded, Reporter {}

  interface AgeIsNumber {
    age: number;
  }

  interface AgeIsNotANumber {
    age: () => string;
  }

  //! Error
  // class AsNumber implements AgeIsNumber, AgeIsNotANumber {
  //   age = 0;
  // }
  // class NotAsNumber implements AgeIsNumber, AgeIsNotANumber {
  //   age() {
  //     return "";
  //   }
  // }
}

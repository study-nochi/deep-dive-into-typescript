{
  class Teacher {
    teach() {
      console.log("The surest test of discipline is its absence");
    }
  }

  class StudentTeacher extends Teacher {
    learn() {
      console.log("I cannot afford the luxury of a closed mind");
    }
  }

  const teacher = new StudentTeacher();

  teacher.teach();
  teacher.learn();
  //! teacher.other();
}

{
  //* 할당 가능성 확장
  class Lesson {
    subject: string;

    constructor(subject: string) {
      this.subject = subject;
    }
  }

  class OnlineLesson extends Lesson {
    url: string;

    constructor(subject: string, url: string) {
      super(subject);
      this.url = url;
    }
  }

  let lesson: Lesson;
  lesson = new Lesson("coding");
  lesson = new OnlineLesson("coding", "oreilly.com");

  let online: OnlineLesson;
  online = new OnlineLesson("coding", "orelly.com");

  //! online = new Lesson("codding");

  class PastGrades {
    grades: number[] = [];
  }

  class LabeledPastGrades extends PastGrades {
    label?: string;
  }

  let subClass: LabeledPastGrades;

  subClass = new LabeledPastGrades();
  subClass = new PastGrades();
}

{
  //* 재정의된 생성자
  class GradeAnnouncer {
    message: string;

    constructor(grade: number) {
      this.message = grade >= 65 ? "Maybe next time..." : "You pass!";
    }
  }

  class PassingAnnouncer extends GradeAnnouncer {
    constructor() {
      super(100);
    }
  }

  //! Error
  // class FailingAnnouncer extends GradeAnnouncer {
  //   constructor() {}
  // }

  class GradesTally {
    grades: number[] = [];

    addGrades(...grades: number[]) {
      this.grades.push(...grades);
      return this.grades.length;
    }
  }

  class ContinuedGradesTally extends GradesTally {
    constructor(previousGrades: number[]) {
      //!   this.grades = [...previousGrades];
      super();

      console.log("Starting with length", this.grades.length);
    }
  }
}

{
  //* 재정의된 메서드
  class GradeCounter {
    countGrades(grades: string[], letter: string) {
      return grades.filter((grades) => grades === letter).length;
    }
  }

  class FailureCounter extends GradeCounter {
    countGrades(grades: string[]) {
      return super.countGrades(grades, "F");
    }
  }

  class AnyFailureChecker extends GradeCounter {
    //! Error
    // countGrades(grades: string[]) {
    //   return super.countGrades(grades, "F") !== 0;
    // }
  }

  const counter: GradeCounter = new AnyFailureChecker();
  //! const count = counter.countGrades(["A", "C", "F"]);
}

{
  //* 재정의된 속성
  class Assignment {
    grade?: number;
  }

  class GradedAssignment extends Assignment {
    grade: number;

    constructor(grade: number) {
      super();
      this.grade = grade;
    }
  }

  class NumbericGrade {
    value = 0;
  }

  class VagueGrade extends NumbericGrade {
    //! value = Math.random() > 0.5 ? 1 : "...";
  }

  const instance: NumbericGrade = new VagueGrade();
  instance.value;
}

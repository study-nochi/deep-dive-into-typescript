{
  class Base {
    isPublicImplicit = 0;
    public isPublicExplicit = 1;
    protected isProtected = 2;
    private isPrivate = 3;
    #truePrivate = 4;
  }

  class SubClass extends Base {
    example() {
      this.isPublicImplicit;
      this.isPublicExplicit;
      this.isProtected;

      //! this.isPrivate;
      //! this.#truePrivate;
    }
  }

  new SubClass().isPublicImplicit;
  new SubClass().isPublicImplicit;

  //! new SubClass().isProtected;
  //! new SubClass().isPrivate;

  class TwoKeywords {
    private readonly name: string;

    constructor() {
      this.name = "Anne Sullivan";
    }

    log() {
      console.log(this.name);
    }
  }

  const two = new TwoKeywords();
  //! two.name = "이름";
}

{
  //* 정적 필드 제한자
  class Question {
    protected static readonly answer: "bash";
    protected static readonly prompt =
      "What's an ogre's favorite programming language?";

    guess(getAnswer: (prompt: string) => string) {
      const answer = getAnswer(Question.prompt);

      if (answer === Question.answer) {
        console.log("You got it!");
      } else {
        console.log("Try again...");
      }
    }
  }

  //! Question.answer;
}

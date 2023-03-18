{
  class FieldTrip {
    destination: string;

    constructor(destination: string) {
      this.destination = destination;
      console.log(`We're going to ${this.destination}!`);

      //! Error
      // this.nonexistent = destination;
    }
  }

  const trip = new FieldTrip("planetarium");
  trip.destination;

  //! Error
  // trip.nonexistent
}

{
  //* 함수 속성
  class WithMethod {
    myMethod() {}
  }

  new WithMethod().myMethod === new WithMethod().myMethod; //true

  class WithPropertyParameters {
    takesParameters = (input: boolean) => (input ? "Yes" : "No");
  }

  const instance = new WithPropertyParameters();

  instance.takesParameters(true);

  //! Error
  // instance.takesParameters(123);
}

{
  //* 초기화 검사
  class WithValue {
    immediate = 0;
    later: number;
    mayBeUndefined: number | undefined;

    //! Error
    // unused: number;

    constructor() {
      this.later = 1;
    }
  }

  //! Error
  // class MissingInitializer {
  //   property: string;
  // }

  // new MissingInitializer().property.length;
}

{
  //* 확실하게 할당된 속성
  class ActivitiesQueue {
    pending!: string[];

    initialize(pending: string[]) {
      this.pending = pending;
    }

    next() {
      return this.pending.pop();
    }
  }

  const activities = new ActivitiesQueue();

  activities.initialize(["eat", "sleep", "learn"]);
  activities.next();
}

{
  //* 선택적 속성
  class MissingInitializer {
    property?: string;
  }

  new MissingInitializer().property?.length;

  //! Error
  // new MissingInitializer().property.length;
}

{
  //* 읽기 전용 속성

  class Quote {
    readonly text: string;

    constructor(text: string) {
      this.text = text;
    }

    emphasize() {
      //! Error
      // this.text += "!";
    }
  }

  const quote = new Quote(
    "There is a brilliant child locked inside every student"
  );

  //! Error
  // quote.text = 'Ha!'
}

{
  class RandomQuote {
    readonly explicit: string = "Home is the nicest word there is.";
    readonly implicit = "Home is the nicest word there is.";

    constructor() {
      if (Math.random() > 0.5) {
        this.explicit = "We start learning the minute we're born.";

        //! Error
        // this.implicit = "We start learning the minute we're born.";
      }
    }
  }

  const quote = new RandomQuote();
  quote.explicit;
  quote.implicit;
}



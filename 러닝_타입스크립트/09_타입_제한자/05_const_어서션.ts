{
  [0, ""];
  [0, ""] as const;
}

{
  //* 리터럴에서 원시 타입으로
  const getName = () => "Maria Bamford";
  const getNAmeConst = () => "Maria Bamford" as const;

  interface Joke {
    quote: string;
    style: "story" | "one-liner";
  }

  function tellJoke(joke: Joke) {
    if (joke.style === "one-liner") {
      console.log(joke.quote);
    } else {
      console.log(joke.quote.split("\n"));
    }
  }

  const narrowJoke = {
    quote: "If you stay alive for no other reason do it for spite",
    style: "one-liner" as const,
  };

  tellJoke(narrowJoke);

  const wideObject = {
    quote: "Time flies when you are anxious!",
    style: "one-liner",
  };

  //! tellJoke(wideObject);
}

{
  //* 읽기 전용 객체
  function describePreference(preference: "maybe" | "no" | "yes") {
    switch (preference) {
      case "maybe":
        return "I suppose...";
      case "no":
        return "No thanks";
      case "yes":
        return "Yes please!";
    }
  }

  const preferencesMutable = {
    movie: "maybe",
    standup: "yes",
  };

  //! describePreference(preferencesMutable);

  preferencesMutable.movie = "no";

  const preferencesReadonly = {
    movie: "maybe",
    standup: "yes",
  } as const;

  describePreference(preferencesReadonly.movie);

  //! preferencesReadonly.movie = "no";
}

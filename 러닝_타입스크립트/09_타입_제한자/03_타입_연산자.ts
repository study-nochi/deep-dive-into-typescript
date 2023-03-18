{
  //* keyof
  interface Ratings {
    audience: number;
    critics: number;
  }

  function getRating(ratings: Ratings, key: keyof Ratings) {
    return ratings[key];
  }

  const ratings: Ratings = { audience: 66, critics: 84 };

  getRating(ratings, "audience");
  //! getRating(ratings, "not valid");
}

{
  //* typeof
  const original = {
    medium: "movie",
    title: "Mean Girls",
  };

  let adaptation: typeof original;

  if (Math.random() > 0.5) {
    adaptation = { ...original, medium: "play" };
  } else {
    //! adaptation = { ...original, medium: 2 };
  }
}

{
  //* keyof typeof
  const ratings = {
    imdb: 8.4,
    metacritic: 82,
  };

  function logRating(key: keyof typeof ratings) {
    console.log(ratings[key]);
  }

  logRating("imdb");
  //! logRating("invalid");
}

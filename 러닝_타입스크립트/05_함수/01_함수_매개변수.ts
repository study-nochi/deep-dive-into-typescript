{
  function sing(song: string) {
    console.log("Singing: ${song");
  }
}

{
  //* 필수 매개변수
  function singTwo(first: string, second: string) {
    console.log(`${first} / ${second}`);
  }

  // singTwo("Ball and Chain"); // Error
  singTwo("I Will Survive", "Higher Love");
  // singTwo("Go Your Own Way", "The Chain", "Dreams"); // Error
}

{
  //* 선택적 매개변수
  function announceSong(song: string, singer?: string) {
    console.log(`Song: ${song}`);

    if (singer) {
      console.log(`Singer: ${singer}`);
    }
  }

  announceSong("Greensleeves");
  announceSong("Greensleeves", undefined);
  announceSong("Greensleeves", "Sia");
}

{
  //* 기본 매개변수
  function rateSong(song: string, rating = 0) {
    console.log(`${song} gets ${rating}/5 stars!`);
  }

  rateSong("Photograph");
  rateSong("Set Fire to the Rain", 5);
  rateSong("Set Fire to the Rain", undefined);
  //rateSong("At Last!", "100"); // Error
}

{
  //* 나머지 매개변수
  function singAllTheSongs(singer: string, ...songs: string[]) {
    for (const song of songs) {
      console.log(`${song}, by ${singer}`);
    }
  }

  singAllTheSongs("Alicia Keys");
  singAllTheSongs("Lady Gaga", "Bad Romance", "Just Dance", "Poker Face");
  // singAllTheSongs("Ella Fitzgerald", 2000); // Error
}

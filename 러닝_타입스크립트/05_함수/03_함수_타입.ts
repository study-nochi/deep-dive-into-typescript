{
  let notingInGivesString: () => string;
  let inputAndOutput: (songs: string[], count?: number) => number;

  const songs = ["Juice", "Shake It Off", "What's Up"];

  function runOnSongs(getSongAt: (index: number) => string) {
    for (let i = 0; i < songs.length; i += 1) {
      console.log(getSongAt(i));
    }
  }

  function getSongAt(index: number) {
    return `${songs[index]}`;
  }

  runOnSongs(getSongAt);

  function logSong(song: string) {
    return `${song}`;
  }

  // runOnSongs(logSong); // Error
}

{
  //* 함수 타입 괄호
  let returnsStringOrUndefined: () => string | undefined;
  let maybeReturnsString: (() => string) | undefined;
}

{
  //*매개변수 타입 추론
  let singer: (song: string) => string;

  singer = function (song) {
    return `Singing: ${song.toUpperCase()}!`;
  };

  const songs = ["Call Me", "Jolene", "The Chain"];
  songs.forEach((song, index) => {
    console.log(`${song} is at index ${index}`);
  });
}

{
  //* 함수 타입 별칭
  type StringToNumber = (inpurt: string) => number;

  let stringToNumber: StringToNumber;

  stringToNumber = (input) => input.length;
  // stringToNumber = (input) => input.toUpperCase(); // Error

  type NumberToString = (input: number) => string;

  function usesNumberToString(numberToString: NumberToString) {
    console.log(`The string is: ${numberToString(1234)}`);
  }

  usesNumberToString((input) => `${input}! Hooray!`);
  // usesNumberToString((input) => input * 2); // Error
}

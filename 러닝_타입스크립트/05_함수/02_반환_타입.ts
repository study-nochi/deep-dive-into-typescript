{
  function singSongs(songs: string[]) {
    for (const song of songs) {
      console.log(`${song}`);
    }

    return songs.length;
  }

  function getSongAt(songs: string[], index: number) {
    return index < songs.length ? songs[index] : undefined;
  }
}

{
  //* 명시적 반환 타입
  function singSongsRecursive(songs: string[], count = 0): number {
    return songs.length ? singSongsRecursive(songs.slice(1), count + 1) : count;
  }

  const singSongsRecursive2 = (songs: string[], count = 0): number => {
    return songs.length
      ? singSongsRecursive2(songs.slice(1), count + 1)
      : count;
  };

  function getSongRecordingDate(song: string): Date | undefined {
    switch (song) {
      case "Strange Fruit":
        return new Date("April 20, 1939");
      // case "Greensleeves":
      //   return "unknown";
      default:
        return undefined;
    }
  }
}

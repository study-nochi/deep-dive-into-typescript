{
  function createDate(timestamp: number): Date;
  function createDate(month: number, day: number, year: number): Date;
  function createDate(monthOrTimestamp: number, day?: number, year?: number) {
    return day === undefined || year === undefined
      ? new Date(monthOrTimestamp)
      : new Date(year, monthOrTimestamp, day);
  }

  createDate(554356800);
  createDate(7, 27, 1987);
  // createDate(4, 1);
}

{
  //* 호출 시그니처 호환성
  function format(data: string): string;
  function format(data: string, needle: string, haystack: string): string;
  // function format(getData: () => string): string; // Error
  function format(data: string, needle?: string, haystack?: string) {
    return needle && haystack ? data.replace(needle, haystack) : data;
  }
}

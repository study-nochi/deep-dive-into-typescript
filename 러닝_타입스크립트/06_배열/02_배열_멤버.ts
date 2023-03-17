{
  const defenders = ["Clarenza", "Dina"];

  const defender = defenders[0];
  const soldiersOrDates = ["Deborah Sampson", new Date(1782, 6, 3)];

  const soldiersOrDate = soldiersOrDates[0];
}

{
  //* 주의 사항: 불안정한 멤버
  function withElements(elements: string[]) {
    console.log(elements[9001].length); // 타입 오류 없음
  }

  withElements(["It's", "over"]);
}


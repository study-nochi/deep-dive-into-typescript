{
  interface Box<T> {
    inside: T;
  }

  let stringyBox: Box<string> = {
    inside: "abc",
  };

  let numberBox: Box<number> = {
    inside: 123,
  };

  //! Error
  // let incorrectBox: Box<number> = {
  //   inside: false
  // }

  interface Array<T> {
    pop(): T | undefined;
    push(...items: T[]): number;
  }
}

{
  //* 유추된 제네릭 인터페이스 타입
  interface LinkedNode<Value> {
    next?: LinkedNode<Value>;
    value: Value;
  }

  function getLast<Value>(node: LinkedNode<Value>): Value {
    return node.next ? getLast(node.next) : node.value;
  }

  let lastDate = getLast({
    value: new Date("09-13-1993"),
  });

  let lastFruit = getLast({
    next: {
      value: "banana",
    },
    value: "apple",
  });

  //! Error
  // let lastMismatch = getLast({
  //   next: {
  //     value: 123,
  //   },
  //   value: false,
  // });
}

{
  interface CreateLike<T> {
    constant: T;
  }

  //! Error
  // let missingGeneric: CreateLike = {
  //   inside: "??",
  // };
}

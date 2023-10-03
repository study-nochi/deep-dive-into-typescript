// 타입 추론 기본 1
{
  let a = "abc";

  function getB(b = 10) {
    let c = "hi";
    return b + c;
  }
}

// 타입 추론 기본 2
{
  interface Dropdown<T> {
    value: T;
    title: string;
  }

  let shoppingItem: Dropdown<string> = {
    value: "abc",
    title: "hello",
  };
}

// 타입 추론 기본 3
{
  interface Dropdown<T> {
    value: T;
    title: string;
  }

  interface DetailDropdown<K> extends Dropdown<K> {
    tag: K;
    description: string;
  }

  let detailedItem: DetailDropdown<string> = {
    description: "abc",
    tag: "abc",
    title: "a",
    value: "c",
  };
}

// Best Common Type
{
  let a = [1, 2, true, true, "a"];
}

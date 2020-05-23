// boolean (true / false)
let isOpen: boolean;
isOpen = true;

// string ('foo' / "foo" / `foo`)
let message: string;
message = `foo ${isOpen}`;

// number (int, float, hex, binary)
let total: number;
total = 0xff0;

// array (type[])
let items: string[];
items = ["foo", "bar"];

let values: Array<number>;
values = [1, 2, 3];

// tuple
let title: [number, string, string];
title = [1, "foo", "bar"];

// enum
enum Colors {
  white = "#fff",
  black = "#000",
}

// any (anything) IS NOT COOL!
let anything: any;
anything = [1];

// void (empty)
function logger(): void {
  console.log("foo");
}

// null | undefined
type Bla = string | undefined;

// never
function error(): never {
  throw new Error("error");
}

// object
let cart: object;
cart = { key: "fi" };

// Type Inference
let message2 = "defined message";
message2 = "new string";

window.addEventListener("click", (e) => {
  console.log(e.target);
});

// Interfaces

// definition
interface Game {
  title: string;
}

interface DLC {
  extra: string;
}

// intersection | extend
interface GameCollection extends Game, DLC {}

// implements
class CreateGame implements GameCollection {}

// declare function
interface getSimilars {
  (title: string): void;
}

// ============== Diff ============== //

interface ID extends number {}

// not allowed define Tuples on interface
interface Tuple {
  0: number;
  1: number;
}

[1, 2] as Tuple;

// can have multiple declarations and it joins the same name

interface JQuery {
  a: string;
}

interface JQuery {
  b: string;
}

const $: JQuery = {
  a: "bla",
  b: "foo",
};

// advantages: when creating libs, prefer Interface because it's more extensives!

// creating objects/classes (POO)

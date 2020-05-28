// Type Alias

// definition
type GameT = {
  title: string;
};

type DLCT = {
  extra: string;
};

// intersection
type GameCollectionT = Game & DLCT;

// implements
class CreateGameT implements GameCollectionT {}

// declare function
type getSimilarsT = (title: string) => void;

// ============== Diff ============== //

// allows declare primitive types
type IDT = string | number;

// allows declare tuples normally
type TupleT = [number, number];

[1, 2] as TupleT;

// only one declaration by scope
type JQueryT = { a: string };
type JQueryT = { b: string };

// recommend:
// mostly
// React - Props

// CONSISTENCY!

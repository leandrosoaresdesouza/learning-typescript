// S => State
// T => Type
// K => Key
// V => Value
// E => Element

function useState<S extends number | string = string>() {
  let state: S;

  function getState() {
    return state;
  }

  function setState(newState: S) {
    state = newState;
  }

  return { getState, setState };
}

const newState = useState();
// const newState = useState<string>();

newState.setState("foo"); // is string
console.log(newState.getState());

// newState.setState(false); // error
// console.log(newState.getState());

// newState.setState(123); // error
// console.log(newState.getState());

newState.setState("bla");
console.log(newState.getState());

"use strict";
// S => State
// T => Type
// K => Key
// V => Value
// E => Element
function useState() {
    var state;
    function getState() {
        return state;
    }
    function setState(newState) {
        state = newState;
    }
    return { getState: getState, setState: setState };
}
var newState = useState();
// const newState = useState<string>();
newState.setState("foo"); // is string
console.log(newState.getState());
// newState.setState(false); // error
// console.log(newState.getState());
// newState.setState(123); // error
// console.log(newState.getState());
newState.setState("bla");
console.log(newState.getState());

import React, {useState} from 'react';

/** Note that whenever a state changes,
 * the whole component below updates */
function NewStateComponent() {
  
  /** useState:
  *    + input: initial state (any js object)
  *    + returns: array with
  *        - idx 1: function 
  *                  + takes new state as input to update 
  *                    the component by which it updates state 
  *        - idx 0: new state (any js object)
  *                  + The input ot function @idx1
  * 
  * Note:
  * When input to function @idx1 is sent, the whole component
  * updates. But this time, `useState` sends new state @idx1
  * which can be rendered
  */
  var [curState, updateState] = useState(0) // intially `curState` is `0`


  return (
    <div>
      <h1>{curState}</h1>
      <button onClick={ () => updateState(curState + 1) }>
        +1
      </button> 
      &nbsp; 
      <button onClick={ () => updateState(curState - 1) }>
        -1
      </button>
    </div>
  );
}
  
export default NewStateComponent;
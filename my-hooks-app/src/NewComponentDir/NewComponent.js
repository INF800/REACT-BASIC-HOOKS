import React from 'react';

//function NewComponent(props) {
function NewComponent({comment, excitement=2}) { // advantage is default arg values
    var num = Math.random() * 10
    // var comment = ( num > 5 ? "Big" : "Small" ) + "Number"
    // if (props.comment) {
    //     comment = props.comment
    // }
    var exclamation = "!".repeat(excitement)

    return (
      <div>
        <div>
            This is  NewComponent
        </div>
        <div>
            Ranndom Number is: {num} 
            and it is a {comment} {exclamation}
        </div>
      </div>
    );
  }
  
export default NewComponent;
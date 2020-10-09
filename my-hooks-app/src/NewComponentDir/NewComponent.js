import React from 'react';

function NewComponent(props) {
    var num = Math.random() * 10
    var comment = ( num > 5 ? "Big" : "Small" ) + "Number"
    if (props.comment) {
        comment = props.comment
    }
    return (
      <div>
        <div>
            This is  NewComponent
        </div>
        <div>
            Ranndom Number is: {num} 
            and it is a {comment}
        </div>
      </div>
    );
  }
  
export default NewComponent;
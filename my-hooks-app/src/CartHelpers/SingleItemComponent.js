import React from 'react';

function SingleItemComponent({id, name, price, qty, upateQtyAtId}){
    
    function addOne() {
        upateQtyAtId(id, qty + 1)
    }
    function subOne() {
        upateQtyAtId(id, qty - 1)
    }
    
    return (
        <div>
            {id}. {name} 
            <button onClick={addOne}>+</button> 
                {qty} 
            <button onClick={subOne} disabled={qty < 1}>-</button> 
            x{price} &nbsp; 
            Cost = Rs. {qty*price}
        </div>
    )
}

export default SingleItemComponent
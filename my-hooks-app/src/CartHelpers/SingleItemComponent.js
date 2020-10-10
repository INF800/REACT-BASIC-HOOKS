import React from 'react';

function SingleItemComponent({id, name, price, qty}){
    return (
        <div>
            {id}. {name} <button>+</button> {qty} <button>-</button> x{price} 
            &nbsp; Cost = Rs. {qty*price}
        </div>
    )
}

export default SingleItemComponent
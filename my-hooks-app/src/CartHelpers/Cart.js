import React from 'react';
import './Cart.css'

import SingleItemComponent from './SingleItemComponent'

function Cart(props) {
    if (props.data) {        

        // for every item in data
        // note: doesn't input `item` in `map` below. yet, works
        const actOnEachItem = (item) => {
            /*
            return (
                <SingleItemComponent
                    id     = {item.id}    
                    price  = {item.price}
                    qty    = {item.qty}
                    name   = {item.name}
                />
            )
            */
           // or use:
           // note: `key` must be given to a component w/
           // some data as val. else, error is thrown.
           return (
                <SingleItemComponent key={item.id} {...item} />
           ) 
        }

        var totalSum = 0
        for (let i=0; i<props.data.length; i++){
            totalSum += props.data[i].price * props.data[i].qty
        }
        
        return (
            <div>
                <div className='cartContainer'>
                    <div>
                        { props.data.map(actOnEachItem) }
                    </div>
                    <div>
                        <h1>Total = {totalSum}</h1>
                    </div>
                </div>
            </div>
        )
    }

    // if no data, return failure
    return (
        <div className='cartContainer centerMessage'>
            Api Failure
        </div>
    )

}

export default Cart
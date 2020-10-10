import React, {useState} from 'react';
import './Cart.css'

import SingleItemComponent from './SingleItemComponent'

function Cart(props) {

    // make sure curData / props.data is not mutated
    var [curData, updateDataFunc] = useState(props.data)
    
    function upateQtyAtId(id, newQty){
        // returns new list w/ updated items
        const editQtyWithSameId = (item) => {
            if (item.id === id) {
                return {...item, qty: newQty}
            } else {
                return {...item}
            }
        }
        // 1. make copy: same as not mutating the state datastructure
        const newData = curData.map(editQtyWithSameId)
        console.log(newData)
        // 2. update using actual func 
        updateDataFunc(newData)
    }

    if (curData) {        
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
                <SingleItemComponent key={item.id} {...item} upateQtyAtId={upateQtyAtId}/>
           ) 
        }

        // will be calculated on updated data every time
        var totalSum = 0
        for (let i=0; i<curData.length; i++){
            totalSum += curData[i].price * curData[i].qty
        }
        
        return (
            <div>
                <div className='cartContainer'>
                    <div>
                        { curData.map(actOnEachItem) }
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
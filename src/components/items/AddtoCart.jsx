import React, {useState} from 'react';
import {connect} from 'react-redux';

function AddItem(props) {
    const [cart, setCart] = useState({id: 0, description: ""});


    const addToCart = (itemId, quantity) => {
        setCart({
            ...cart,
            id: itemId,
            description: (cart[itemId] || 0) + quantity + " description"
        });
        console.log("cart", cart);
        props.submitToStore(cart);
    };

    return (
        <div>
            <button onClick={() => addToCart(1, 1)}>Add to cart</button>
        </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    // this will be injected in child component props
    submitToStore: (input) => dispatch({type: 'INPUT', payload: input}),
});


export default connect(null, mapDispatchToProps)(AddItem);





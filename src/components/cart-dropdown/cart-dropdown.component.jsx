import React from 'react';
import CustomButton from '../custom-button/custom-button.component.jsx';
import './cart-dropdown.styles.scss';
import CartItem from '../cart-item/cart-item.component.jsx';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { selectCartItems } from '../../redux/cart/cart.selectors.js';
import { createStructuredSelector } from 'reselect';



const CartDropDown = ({ cartItems, history }) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.length ? (
                cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>))
               ) : ( <span className='empty-message'>Your Cart Is Empty</span>
            )}
        </div>
        <CustomButton onClick={() => {history.push('/checkout');}}>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})

export default withRouter(connect(mapStateToProps)(CartDropDown));
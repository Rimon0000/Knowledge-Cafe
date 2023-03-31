import React, { useState } from 'react';
import './Cart.css'

const Cart = ({cart, totalTime}) => {
    // const {blog_title} = props
    // console.log(props.cart)
    console.log(cart)


    return (
        <div className='cart'>
            <div className='spend-time'>
                <h3>Spent time on read : {totalTime} min</h3>
            </div>
            <div className='bookmarked'>
            <h4>Bookmarked Blogs : {cart.length}</h4>
            <div className='bookmarked-blog'>
                {
                cart.map(ct => <h3 className='blog-title'>{ct.blog_title}</h3>)
                }
            </div>

            </div>
        </div>
    );
};

export default Cart;
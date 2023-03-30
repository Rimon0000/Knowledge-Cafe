import React from 'react';
import './Cart.css'

const Cart = ({cart}) => {
    // const {blog_title} = props
    // console.log(props.cart)

    // let blog_title;
    // for(const name of cart){
    //     blog_title = name.blog_title
    // }

    return (
        <div>
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
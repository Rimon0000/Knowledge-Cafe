import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [cart, setCart] = useState([])
    const [time, setTime] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setBlogs(data))
    }, [])

    const handleAddToCart = (blog) =>{
        // cart.push(blog)
        const newCart = [...cart,blog]
        setCart(newCart)

        const exist = cart.find(pd => pd.id === blog.id)
        if(exist){
            toast('You Have Already Bookmarked This Blog')
        }
        
    }

    const handleAddToTime = (blog) =>{
        // console.log(blog.read_time)
        // const {read_time} = blog
        let time = 0
        const read_time = blog.read_time
        time = time + read_time
        setTime(time)
        console.log(time)
    }

    return (
        <div className='blogs-container'>
             <div className="single-blog-container">
                {
                    blogs.map(blog => <SingleBlog 
                        blog = {blog}
                        key = {blog.id}
                        handleAddToCart = {handleAddToCart}
                        handleAddToTime = {handleAddToTime}
                        ></SingleBlog>)
                }
                <ToastContainer />
            </div>
            <div className="cart-container">
                <Cart cart = {cart}></Cart>
            </div>   
        </div>
    );
};

export default Blog;
import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])
    const [cart, setCart] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setBlogs(data))
    }, [])

    const handleAddToCart = (blog) =>{
        // cart.push(blog)
        const newCart = [...cart,blog]
        setCart(newCart)
    }

    return (
        <div className='blogs-container'>
             <div className="single-blog-container">
                {
                    blogs.map(blog => <SingleBlog 
                        blog = {blog}
                        key = {blog.id}
                        handleAddToCart = {handleAddToCart}
                        ></SingleBlog>)
                }
            </div>
            <div className="cart-container">
                <h4>Bookmarked Blogs: {cart.length}</h4>
            </div>   
        </div>
    );
};

export default Blog;
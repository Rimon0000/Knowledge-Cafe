import React, { useEffect, useState } from 'react';
import SingleBlog from '../SingleBlog/SingleBlog';
import './Blog.css'

const Blog = () => {
    const [blogs, setBlogs] = useState([])

    useEffect( () =>{
        fetch('products.json')
        .then(res => res.json())
        .then( data => setBlogs(data))
    }, [])

    return (
        <div className='blogs-container'>
             <div className="single-blog-container">
                {
                    blogs.map(blog => <SingleBlog 
                        blog = {blog}
                        key = {blog.id}
                        ></SingleBlog>)
                }
            </div>
            <div className="cart-container">
                <h4>this is cart</h4>
            </div>   
        </div>
    );
};

export default Blog;
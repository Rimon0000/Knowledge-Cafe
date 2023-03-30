import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'
import './SingleBlog.css'

const SingleBlog = (props) => {
    const {id, blog_title,author_name,author_img,cover_img, read_time} = props.blog
    const handleAddToCart = props.handleAddToCart

    return (
        <div className='blog'>
            <img src={cover_img} alt="" />
            <div className='blog-info'>
                <div className='author_body'>
                    <div className='author'>
                        <img src={author_img} alt="" />
                        <div className='author_info'>
                           <h3>{author_name}</h3>
                           <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div className='time'>
                        <p>{read_time} min read</p>
                        <button onClick={() =>handleAddToCart(props.blog)} className='btn-bookmark'><FontAwesomeIcon icon={faBookmark} /></button>
                    </div>
                </div>
              <h4 className='blog-name'>{blog_title}</h4>
              <div className='hasTag'>
                <p>#beginners</p>
                <p>#programming</p>
              </div>
             <button className='btn-mark'>Mark as read</button>
           </div>
        </div>
    );
};

export default SingleBlog;
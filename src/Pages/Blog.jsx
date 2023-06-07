import React from 'react';
import '../Styles/Blog.css'
import Footer from './Footer';
import Book from './Book';

function Blog(){
    return(
        <div>
            <div className='blog-parent-one'>
                <div className='blog-one'>
                    <div>
                        <h3>Blog</h3>
                        <h1>Get the latest Updates</h1>
                        <p>We Will Open The World Of Knowledge For You! This is the latest online examination system you will ever need! </p>
                    </div>
                </div>
            </div>
            <Book/>
            <Footer/>
        </div>
    )
}
export default Blog;
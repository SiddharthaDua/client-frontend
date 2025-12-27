import React from 'react'
import BlogHeading from '../components/blogdetails/BlogHeading'
import Second from '../components/blogdetails/Second'
import Third from '../components/blogdetails/Third'
import Fourth from '../components/blogdetails/Fourth'
import Fifth from '../components/blogdetails/Fifth'
import BlogWriter from '../components/blogdetails/BlogWriter'
import RelatedArticles from '../components/blogdetails/RelatedArticles'
import BlogContact from '../components/blogdetails/BlogContact'

const BlogDetails = ({ onGetStarted }) => {
    return (
        <div>
            <BlogHeading />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <BlogWriter />
            <RelatedArticles />
            <BlogContact onGetStarted={onGetStarted} />
        </div>
    )
}

export default BlogDetails
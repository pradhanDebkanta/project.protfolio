import React from 'react'
import SectionHeaderLogo from '../sectionHeaderLogo/SectionHeaderLogo'
import { BlogItem } from './BlogItem'
import BlogCard from './BlogCard'
import './Blog.css'

const Blog = (props) => {
    return (
        <section className="container blog">
            <SectionHeaderLogo
                heading={props.heading}
                para={props.para}
            />
            
            <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6">
                    <BlogCard cardData={BlogItem[0]}/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                <BlogCard cardData={BlogItem[1]}/>
                </div>

                <div className="col-lg-4 col-md-6 col-sm-6">
                <BlogCard cardData={BlogItem[2]}/>
                </div>
            </div>

        </section>
    );
}

export default Blog
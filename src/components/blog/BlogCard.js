import React,{Component} from 'react'
import './BlogCard.css'
class BlogCard extends Component{
    render(){
        return(
            <div className="d-flex justify-content-center">
                <div className="blog-card">
                    <img src={this.props.cardData.imgUrl} alt="card img" className="img-fluid"/>
                    <h3 className="blog-card-heading">{this.props.cardData.heading}</h3>
                    <p className="blog-card-describtion">{this.props.cardData.describtion}</p>
                    <a className="read-more" href={this.props.cardData.readMoreLink}>Read more</a>
                </div>
            </div>
        );
    }
}
export default BlogCard
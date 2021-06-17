import React, { Component } from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import './NewsLetter.css'

class NewsLetter extends Component {
    state = {
        email: 'Enter your email address'
    }
    onHandleChange = (event)=>{
        this.setState({
            email: event.target.value
        })
    }

    onHandleClick = (event)=>{
        let flag = this.state.email? '':'Enter your email address';
        this.setState({
            email: flag
        })
    }
    render() {
        return (
            <section className="container news-letter">
                <SectionHeader
                    heading="Subscribe to Our Newsletter"
                    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry"
                />
                <div className="d-flex justify-content-center">
                    <form className="form-inline">
                        <div className="form-group mx-sm-3 mb-2">
                            <input
                             type="email" 
                             value={this.state.email}
                              className="form-control"
                               onChange={(e) => (this.onHandleChange(e))}
                               onClick={(e)=>this.onHandleClick(e)}
                             />
                        </div>
                        <button type="submit" className="btn">Subscribe</button>

                    </form>
                </div>
            </section>
        );
    }
}

export default NewsLetter
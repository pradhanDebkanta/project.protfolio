import React, { Component } from 'react'
import './NatureCard.css'

class NatureCard extends Component {
    state = {
        hover: false
    }
    hoverHandeler = () => {
        this.setState({ hover: !this.state.hover })
    }
    render() {
        return (
            <div className="d-flex justify-content-center">
                <div className={this.state.hover ? "card card-blue" : "card card-light"} onMouseEnter={this.hoverHandeler} onMouseLeave={this.hoverHandeler}>
                    <div className="icon">
                        <i className={this.state.hover ? "far fa-lemon" : "fas fa-lemon"}></i>
                    </div>

                    <h3 className={this.state.hover? "card-heading-light" : "card-heading-dark"}>{this.props.heading}</h3>
                    <p className={this.state.hover? "card-para-light": "card-para-dark"}>{this.props.para}</p>
                </div>

            </div>
        );
    }
}
export default NatureCard
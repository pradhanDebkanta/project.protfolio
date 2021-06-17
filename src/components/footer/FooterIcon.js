import React, { Component } from 'react'
class FooterIcon extends Component {
    state = {
        flag: false
    }
    onMouseHandeler = () => {
        this.setState({
            flag: !this.state.flag
        })
    }
    render() {
        return (
            <a href={this.props.url} className="social-icon">
                <i className={this.state.flag ? this.props.icon1 : this.props.icon2} onMouseEnter={this.onMouseHandeler} onMouseLeave={this.onMouseHandeler}></i>
            </a>
        );
    }
}
export default FooterIcon
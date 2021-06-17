import React from 'react'
import NavbarBrand from '../../asset/Group_220.png'
import { MenuItems } from './Menuitems';
import './Navmenu.css'

class Navmenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked: false
        };
    }
    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }
    render() {
        return (
            <div className="container">
                <nav className="navbar navbar-expand-lg">
                    <a className="navbar-brand" href="./">
                        <img src={NavbarBrand} alt="Nature Organic Band" className="d-inline-block align-top nav-brand-logo" />
                        <h1 className="brand-text">Organic</h1>
                    </a>
                    <div className="menu-icon" onClick={this.handleClick}><i className={this.state.clicked?"fas fa-times" : "fas fa-bars"}></i></div>
                    <div className={this.state.clicked? "mobile-nav":"collapse navbar-collapse"}>
                    <ul className="navbar-nav ml-auto">
                        {MenuItems.map((item, index) => {
                            return (
                                <li className={item.cName} key={index}>
                                    <a className={item.a.cName} href={item.a.url}>{item.a.title}</a>
                                </li>
                            );
                        })}

                    </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navmenu
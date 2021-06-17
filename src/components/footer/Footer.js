import React, { Component } from 'react'
import FooterIcon from './FooterIcon';
import './Footer.css'
import footerBrand from '../../asset/Group_225.png'

class Footer extends Component {
    
    render() {
        return (
            <section className="footer">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="d-flex justify-content-left ">
                                <div className="footer-brand-box">
                                    <img src={footerBrand} alt="Footer Brand" className="footer-brand" />
                                    <p className="describtion">{this.props.ftPara}</p>
                                    <h3 className="ft-heading">&#169; Copyright 2021 Nature</h3>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-brand-box">
                                <h3 className="ft-heading information">Information</h3>
                                <ul className="item-list">
                                    <li className="list-item"><a href="./">About Us</a></li>
                                    <li className="list-item"><a href="./">Product</a></li>
                                    <li className="list-item"><a href="./">Contact Us</a></li>
                                    <li className="list-item"><a href="./">Terms of Service</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="footer-brand-box">
                                <h3 className="ft-heading follow-us">Follow Us</h3>
                                <div className="social-media">
                                    <FooterIcon 
                                        url="./"
                                        icon1="fab fa-facebook"
                                        icon2= "fab fa-facebook-f"
                                    />
                                    <FooterIcon 
                                        url="./"
                                        icon1="fab fa-linkedin"
                                        icon2= "fab fa-linkedin-in"
                                    />
                                    <FooterIcon 
                                        url="./"
                                        icon1="fab fa-twitter-square"
                                        icon2= "fab fa-twitter"
                                    />
                                    <FooterIcon 
                                        url="./"
                                        icon1="fab fa-instagram-square"
                                        icon2= "fab fa-instagram"
                                    />
                                </div>
                                <p className="designer">Design by <a href="https://github.com/pradhanDebkanta/">Debkanta Pradhan</a></p>
                            </div>

                        </div>
                    </div>

                </div>
            </section>
        );
    }
}

export default Footer
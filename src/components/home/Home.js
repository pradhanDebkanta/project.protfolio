import React from 'react'
import './Home.css'
import HeroImg from '../../asset/Group_228.png'
class Home extends React.Component {
    render() {
        return (
            <section className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="healthy-life-with">{this.props.heading1}</h2>
                        <h1 className="nature-organic">{this.props.heading2}</h1>
                        <p className="home-paragraph">{this.props.para}</p>
                        <button className="btn"><a href="./" className="btn-text">{this.props.btnText}</a></button>
                    </div>
                    <div className="col-md-6">
                        <div className="img-container">
                            <img src={HeroImg} className="rounded mx-auto d-block" alt="Hero img" />
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Home
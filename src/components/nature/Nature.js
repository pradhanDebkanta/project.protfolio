import React from 'react'
import SectionHeaderLogo from '../sectionHeaderLogo/SectionHeaderLogo';
import NatureCard from './NatureCard'
import './Nature.css'
const Nature = (props) => {
    return (
        <section className="container">
            <SectionHeaderLogo
                heading={props.heading}
                para={props.para}
            />

            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <NatureCard
                        heading="Organic Food"
                        para="What is Lorem Ipsum Lorem Ipsum is simply dummy "
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <NatureCard
                        heading="Organic Food"
                        para="What is Lorem Ipsum Lorem Ipsum is simply dummy "
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <NatureCard
                        heading="Organic Food"
                        para="What is Lorem Ipsum Lorem Ipsum is simply dummy "
                    />
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <NatureCard
                        heading="Organic Food"
                        para="What is Lorem Ipsum Lorem Ipsum is simply dummy "
                    />
                </div>
            </div>

        </section>
    );
}


export default Nature
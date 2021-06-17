import React, { Component } from 'react'
import SectionHeader from '../sectionHeader/SectionHeader'
import { CarousalItems } from './CarousalItems';
import Carousal from '../carousal/Caroural';
import './Presented.css'

class Presented extends Component {
    render() {
        return (
            <section className="container presented">
                <SectionHeader
                    heading={this.props.heading}
                    para={this.props.para}
                />

                <Carousal
                    carousalItem = {CarousalItems}
                
                />

            </section>
        );
    }
}

export default Presented
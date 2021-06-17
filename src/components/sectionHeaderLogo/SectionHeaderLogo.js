import React from 'react'
import Logo1 from '../../asset/Group_114.png'
import './SectionHeaderLogo.css'
const SectionHeaderLogo = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="nature-header">
                <div className="nature-logo1">
                    <img src={Logo1} alt="nature logo" />
                </div>
                <h2 className="nature-heading">{props.heading}</h2>
                <p className="nature-para">{props.para}</p>
            </div>
        </div>
    );
}

export default SectionHeaderLogo
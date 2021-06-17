import React from 'react'
import './SectionHeader.css'
const SectionHeader = (props) => {
    return (
        <div className="d-flex justify-content-center">
            <div className="nature-header">
                <h2 className="nature-heading">{props.heading}</h2>
                <p className="nature-para">{props.para}</p>
            </div>
        </div>
    );
}

export default SectionHeader
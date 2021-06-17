import React from 'react'
import Carousel from "react-elastic-carousel"
import Item from "./Item"
import "./Testimonal.css"

const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 1 },
    { width: 768, itemsToShow: 1 },
    { width: 1200, itemsToShow: 1 },
];

function Carousal(props) {

    const arr = Object.values(props)
    return (
        <>
            <div className="carousal">
                <Carousel breakPoints={breakPoints}>
                    {arr[0].map((item, index) => {
                        return (
                            <Item key={index}>
                                <div className="d-flex justify-content-center">
                                    <div className="testimonal-box">
                                        <div className="quote">
                                            <img src={item.logo} alt="quote" />
                                        </div>
                                        <div className="profile">
                                            <img src={item.profile} alt="profile img" />
                                        </div>
                                        <h4 className="profile-name">{item.name}</h4>
                                        <div className="rating">
                                            {rating(item.rating)}
                                        </div>
                                        <p className="comment">{item.comment}</p>
                                    </div>

                                </div>
                            </Item>
                        );
                    })}
                </Carousel>
            </div>
        </>
    );
}

const rating = (number) => {
    const dataArr = [];
    for (let i = 0; i < number; i++) {
        dataArr.push(i)
    }
    return (
        dataArr.map((idx) => {
            return <i className="far fa-star" key={idx}/>;
        })
    );

}


export default Carousal
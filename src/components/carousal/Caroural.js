import React from 'react'
import Carousel from "react-elastic-carousel"
import Item from "./Item"
import "./Carousal.css"

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 3 },
  { width: 768, itemsToShow: 4 },
  { width: 1200, itemsToShow: 5 },
];

function Carousal(props) {
    const arr = Object.values(props)
  return (
    <>
      <div className="carousal">
        <Carousel breakPoints={breakPoints}>
            {arr[0].map((item, index)=>{
                return(
                    <Item key={index}>
                        <img src= {item.url} alt="img"/>
                    </Item>
                );
            })}
        </Carousel>
      </div>
    </>
  );
}

export default Carousal
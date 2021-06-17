import React from 'react'
import { ProtfolioList } from './ProtfolioList';
import Testimonal from '../testimonal/Testimonal'

const Protfolio=()=>{
    return(
        <section className="container protfolio">
            <Testimonal data = {ProtfolioList}/>
        </section>
    );
}

export default Protfolio
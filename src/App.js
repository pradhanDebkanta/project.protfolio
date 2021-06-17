import React from 'react'
import Navmenu from './components/navbar/Navmenu'
import Home from './components/home/Home'
import Nature from './components/nature/Nature'
import Presented from './components/presented/Presented'
import Protfolio from './components/protfolio/Protfolio'
import NewsLetter from './components/newsletter/NewsLetter'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'
import './App.css'

class App extends React.Component {
    render() {
        return (
            <div>
                <Navmenu />
                <Home heading1="Healthy life with"
                    heading2="Nature organic"
                    para="Vegetables are the edible parts of a plant that is used in cooking or can be eaten now"
                    btnText="Explore now"
                />
                <Nature
                    heading="Welcome to Nature"
                    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />
                <Presented
                    heading="Proudly presented by"
                    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />

                <Protfolio />

                <NewsLetter />

                <Blog 
                    heading="Read Our Blog"
                    para="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                />

                <Footer
                ftPara="Lorem Ipsum is simply dummy text of the printing and typesetting"/>



            </div>
        );
    }
}

export default App
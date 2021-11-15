import React from 'react'
import Cadit from './Cadit/Cadit';
import Carousel from './Carousel/CarouselComponent';
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';
import Gamelists from './Gamelists/Gamelists';
import GameMenu from './GameMenu/GameMenu';
import Info from './Info/Info';
import Navbar from './Navbar/Navbar';

function Home() {
    return (
        <div>
            <Navbar />
            <Carousel />
            <GameMenu />
            <Gamelists />
            <Cadit />
            <Info />
            <Contact />
            <Footer />
        </div>
    )
}

export default Home;

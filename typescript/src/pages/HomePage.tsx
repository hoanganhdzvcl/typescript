// import { useState } from 'react'
import Banner from '../components/Banner';
import Blog from '../components/Blog';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Hr from '../components/Hr';
import News from '../components/News';
import Services from '../components/Services';
import Shop from '../components/Shop';

function HomePage() {

    return (
        <>
            <Header />
            <Banner />
            <News featured={true} />
            <Hr />
            <Shop />
            <Blog />
            <Services />
            <Footer />

            <div>

            </div>
        </>
    );
}

export default HomePage;

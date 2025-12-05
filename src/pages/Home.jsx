import Hero from '../components/sections/Hero';
import HomeServices from '../components/sections/HomeServices';
import DestinationsCarousel from '../components/sections/DestinationsCarousel';
import AboutUs from '../components/sections/AboutUs';

const Home = () => {
    return (
        <main>
            <Hero />
            <HomeServices />
            <DestinationsCarousel />
            <AboutUs />
        </main>
    );
};

export default Home;

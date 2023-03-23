import Hero from '../components/sections/hero/Hero';
import Testimonials from '../components/sections/testimonials/Testimonials';
import Services from '../components/sections/services/Services';
import Portfolio from '../components/sections/portfolio/Portfolio';
import Clients from '../components/sections/clients/Clients';

const Home = () => {
    return (
        <>
            <Hero />
            <Testimonials />
            <Services />
            <Portfolio />
            <Clients />
        </>
    );
};

export default Home;

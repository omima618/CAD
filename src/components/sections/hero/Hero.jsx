import './hero.css';
import heroImg from '../../../assets/hero/hero-section-img.png';
import Navbar from '../../shared/navbar/Navbar';
import HeroCards from '../../cards/HeroCards';
import MainButton from '../../buttons/MainButton';

const Hero = () => {
    return (
        <section className='hero'>
            <Navbar />
            <div className='container position-relative py-5'>
                <div className='intro-wrapper'>
                    <h1>
                        Web Development <br /> Studio
                    </h1>
                    <div className='cards-wrapper py-2 py-lg-4 d-flex flex-wrap gap-3'>
                        <HeroCards
                            bgColor='#C637A0'
                            content='Question'
                        />
                        <HeroCards
                            bgColor='#A5456B'
                            content='Price'
                        />
                        <HeroCards
                            bgColor='#D25A75'
                            content='Discounts'
                        />
                        <HeroCards
                            bgColor='#FF717D'
                            content='Guarantees'
                        />
                        <HeroCards
                            border='#ffffff'
                            content='Guarantees'
                        />
                    </div>
                    <p className='intro-text py-3 py-lg-4 m-0'>
                        “ We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our
                        client. We delve into the roots of the company, study its pros and cons.”
                    </p>
                    <div className='hero-links py-3 py-lg-4 d-flex flex-column flex-lg-row gap-3 gap-lg-4 justify-content-between align-items-lg-end'>
                        <div>
                            <h3 className='mb-2 mb-lg-4 pb-2'>WEBSITE <span className='main-color'>DEVELOPMENT</span></h3>
                            <MainButton content='TO GET THE CONSULTATION' />
                        </div>
                        <div className='d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3'>
                            <h3 className='m-0'>
                                WEBSITE <span className='main-color'>DESIGN</span>
                            </h3>
                            <MainButton content='TO GET THE CONSULTATION' />
                        </div>
                    </div>
                </div>
                <div className='img-wrapper'>
                    <img
                        src={heroImg}
                        alt='Hero'
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;

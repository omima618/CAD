import './portfolio.css';
import MainSectionHeading from '../../headings/MainSectionHeading';
import MainButton from '../../buttons/MainButton';
import portfolio1 from '../../../assets/portfolio/portfolio-1.png';
import portfolio2 from '../../../assets/portfolio/portfolio-2.png';
import portfolio3 from '../../../assets/portfolio/portfolio-3.png';
import portfolio4 from '../../../assets/portfolio/portfolio-4.png';
import portfolio5 from '../../../assets/portfolio/portfolio-5.png';
import portfolio6 from '../../../assets/portfolio/portfolio-6.png';
import PortfolioCard from '../../cards/PortfolioCard';

const Portfolio = () => {
    const wprksPic = [portfolio1, portfolio2, portfolio3, portfolio4, portfolio5, portfolio6];
    return (
        <section className='portfolio py-5'>
            <div className='container d-flex flex-column gap-4 align-items-center'>
            <MainSectionHeading titleContent='OUR PORTFOLIO' />
                <div className='works-wrapper d-flex flex-wrap mb-4'>
                    {wprksPic.map((work, i) => {
                        return (
                            <PortfolioCard
                                key={`portfolio-${i + 1}`}
                                workPic={work}
                            />
                        );
                    })}
                </div>
                <MainButton content='TO GET THE CONSULTATION' />
            </div>
        </section>
    );
};

export default Portfolio;

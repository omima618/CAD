import './cards.css';
import { Link } from 'react-router-dom';

const PortfolioCard = ({ workPic }) => {
    return (
        <Link
            to='/'
            className='portfolio-card'
        >
            <img
                src={workPic}
                alt='portfolio'
            />
        </Link>
    );
};

export default PortfolioCard;

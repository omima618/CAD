import './cards.css';
const HeroCards = ({ content = '', bgColor = 'transparent', border = 'transparent' }) => {
    return (
        <div
            className='hero-card'
            style={{ backgroundColor: `${bgColor}`, borderColor: `${border}` }}
        >
            {content}
        </div>
    );
};

export default HeroCards;

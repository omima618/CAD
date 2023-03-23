import './headings.css'
import lineRight from '../../assets/decor/line-right.png';
import lineLeft from '../../assets/decor/line-left.png'

const MainSectionHeading = ({ titleContent = '', showLines = false }) => {
    return (
        <div className='main-section-title pb-4 pb-lg-5 d-flex justify-content-center align-items-center'>
            {showLines && <img className='line' src={lineLeft} alt="section title" />}
            <h2 className='px-4 px-lg-5 flex-shrink-0'>{titleContent}</h2>
            {showLines && <img className='line' src={lineRight} alt="section title" />}
        </div>
    );
};

export default MainSectionHeading;

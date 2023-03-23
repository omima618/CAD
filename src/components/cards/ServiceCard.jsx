import './cards.css';

const ServiceCard = ({ servicePic, serviceTitle }) => {
    return (
        <div className='service-card-wrapper text-center'>
            <h3 className='mb-3'>{serviceTitle}</h3>
            <div className='service-card d-flex justify-content-center align-items-center'>
                <img
                    src={servicePic}
                    alt='servises'
                />
            </div>
        </div>
    );
};

export default ServiceCard;

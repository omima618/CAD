import './cards.css';
const ClientCard = ({ brandLogo }) => {
    return (
        <div className='client-card d-flex justify-content-center align-items-center'>
            <img
                src={brandLogo}
                alt='brand logo'
            />
        </div>
    );
};

export default ClientCard;

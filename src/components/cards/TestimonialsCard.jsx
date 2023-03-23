const TestimonialsCard = ({ clientAvatar, clientReview }) => {
    return (
        <div className='testimonial-card d-flex gap-3 align-items-center'>
            <div className='client-avatar d-flex justify-content-center align-items-center'>
                <img
                    src={clientAvatar}
                    alt='client avatar'
                />
            </div>
            <p className='client-review m-0 p-0'>{clientReview}</p>
        </div>
    );
};

export default TestimonialsCard;

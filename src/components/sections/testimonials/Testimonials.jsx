import './testimonials.css';
import clientAvatar1 from '../../../assets/why-we/why-we-1.png';
import clientAvatar2 from '../../../assets/why-we/why-we-2.png';
import MainSectionHeading from '../../headings/MainSectionHeading';
import TestimonialsCard from '../../cards/TestimonialsCard';

const Testimonials = () => {
    const reviewsData = [
        { id: '1', clientAvatar: clientAvatar1, clientReview: 'We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.' },
        { id: '2', clientAvatar: clientAvatar2, clientReview: 'We are a experienced team of professionals for whom website development is not just a job, but a favorite thing.' },
    ];
    return (
        <section className='testimonials py-5'>
            <div className='container'>
                <MainSectionHeading
                    titleContent='WHY WE'
                    showLines={true}
                />
                <p className='py-4 text-center section-sesc'>
                    We are a experienced team of professionals for whom website development is not just a job, but a favorite thing. Each project is a separate story that we live with our client. We
                    delve into the roots of the company, study its pros and cons. And only after that we begin to create what is really necessary for a successful existence.
                </p>
                <div className='reviews-wrapper py-4'>
                    {reviewsData.map((review) => {
                        return (
                            <TestimonialsCard
                                key={review.id}
                                clientAvatar={review.clientAvatar}
                                clientReview={review.clientReview}
                            />
                        );
                    })}
                </div>
            </div>
            <svg
                className='end-line mt-5'
                width='1919'
                height='2'
                viewBox='0 0 1919 2'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M0.00012207 1L1919 1.00017'
                    stroke='url(#paint0_linear_20_156)'
                    strokeWidth='2'
                    strokeDasharray='2 4'
                />
                <defs>
                    <linearGradient
                        id='paint0_linear_20_156'
                        x1='537.321'
                        y1='-16'
                        x2='553.935'
                        y2='145.824'
                        gradientUnits='userSpaceOnUse'
                    >
                        <stop stopColor='#1B004F' />
                        <stop
                            offset='0.9999'
                            stopColor='#E33EAF'
                        />
                        <stop
                            offset='1'
                            stopColor='#C637A0'
                        />
                    </linearGradient>
                </defs>
            </svg>
        </section>
    );
};

export default Testimonials;

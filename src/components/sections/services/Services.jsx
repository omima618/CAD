import './services.css';
import service1 from '../../../assets/services/services-1.png';
import service2 from '../../../assets/services/services-2.png';
import service3 from '../../../assets/services/services-3.png';
import service4 from '../../../assets/services/services-4.png';
import service5 from '../../../assets/services/services-5.png';
import service6 from '../../../assets/services/services-6.png';
import MainSectionHeading from '../../headings/MainSectionHeading';
import ServiceCard from '../../cards/ServiceCard';
const Services = () => {
    const servicesPic = [
        { id: 'service-1', pic: service1, title: 'WEB' },
        { id: 'service-2', pic: service2, title: 'DESIGN' },
        { id: 'service-3', pic: service3, title: 'DEV' },
        { id: 'service-4', pic: service4, title: 'MARKETING' },
        { id: 'service-5', pic: service5, title: 'SEO' },
        { id: 'service-6', pic: service6, title: 'ADVERTISING' },
    ];
    return (
        <section className='services'>
            <div className='container'>
                <MainSectionHeading titleContent='SERVICES' />
                <div className='services-wrapper py-5 d-flex flex-wrap justify-content-between'>
                    {servicesPic.map((service, i) => {
                        return (
                            <ServiceCard
                                key={service.id}
                                servicePic={service.pic}
                                serviceTitle={service.title}
                            />
                        );
                    })}
                </div>
                <div className="services-pagination pb-5 d-flex justify-content-center gap-3">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span className='active'></span>
                </div>
            </div>
        </section>
    );
};

export default Services;

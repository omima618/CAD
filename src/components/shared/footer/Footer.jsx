import './footer.css';
import logo from '../../../assets/logo.png';
import facebook from '../../../assets/facebook.png';
import instagram from '../../../assets/instagram.png';
import linkedin from '../../../assets/linkedin.png';

import { Link } from 'react-router-dom';
import LinksList from './LinksList';
const Footer = () => {
    const lists = [
        {
            title: 'ORDER WEBSITE',
            links: [
                { path: '/', content: 'Framework' },
                { path: '/', content: 'Online store' },
                { path: '/', content: 'Business card site' },
                { path: '/', content: 'Corporate website' },
                { path: '/', content: 'Landing Page' },
            ],
        },
        {
            title: 'Marketing',
            links: [
                { path: '/', content: 'Framework' },
                { path: '/', content: 'Online store' },
                { path: '/', content: 'Business card site' },
                { path: '/', content: 'Corporate website' },
                { path: '/', content: 'Landing Page' },
            ],
        },
        {
            title: 'SERVICES',
            links: [
                { path: '/', content: 'Framework' },
                { path: '/', content: 'Online store' },
                { path: '/', content: 'Business card site' },
                { path: '/', content: 'Corporate website' },
                { path: '/', content: 'Landing Page' },
            ],
        },
    ];
    const currentYear = new Date().getFullYear();
    return (
        <footer className='py-5'>
            <div className='container d-flex flex-wrap justify-content-between align-items-start gap-lg-5 gap-4'>
                <div className='logo flex-shrink-0'>
                    <Link to='/'>
                        <img
                            src={logo}
                            alt='website logo'
                        />
                    </Link>
                    <p className='pt-lg-5 pt-4'>© {currentYear} CAD. All rights reserved</p>
                </div>
                <div className='lists-wrapper d-flex flex-wrap flex-grow-1 gap-5 justify-content-between'>
                    {lists.map((list, i) => {
                        return (
                            <LinksList
                                key={`${list.title}-${i + 1}`}
                                listTitle={list.title}
                                links={list.links}
                            />
                        );
                    })}
                    <div className='contact-info-wrapper d-inline-block text-start text-md-end'>
                        <h5 className='fw-bold mb-3'>OUR CONTACTS</h5>
                        <p className='schedule'>
                            Schedule: <br /> Mon-Fri: 09:00 - 21:00 <br /> Sat-Sun: 10:00 - 18:00
                        </p>
                        <div className='social-network'>
                            <h6 className='fw-normal mb-3'> SOCIAL NETWORKS</h6>
                            <div className='social-links d-flex justify-content-md-end gap-3 '>
                                <Link to='/'>
                                    <img
                                        src={linkedin}
                                        alt='linkedin'
                                    />
                                </Link>
                                <Link to='/'>
                                    <img
                                        src={instagram}
                                        alt='instagram'
                                    />
                                </Link>
                                <Link to='/'>
                                    <img
                                        src={facebook}
                                        alt='facebook'
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

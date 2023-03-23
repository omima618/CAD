import './clients.css';
import MainSectionHeading from '../../headings/MainSectionHeading';
import client1 from '../../../assets/clients/client-1.png';
import client2 from '../../../assets/clients/client-2.png';
import client3 from '../../../assets/clients/client-3.png';
import client4 from '../../../assets/clients/client-4.png';
import client5 from '../../../assets/clients/client-5.png';
import client6 from '../../../assets/clients/client-6.png';
import client7 from '../../../assets/clients/client-7.png';
import client8 from '../../../assets/clients/client-8.png';
import client9 from '../../../assets/clients/client-9.png';
import client10 from '../../../assets/clients/client-10.png';
import client11 from '../../../assets/clients/client-11.png';
import client12 from '../../../assets/clients/client-12.png';
import ClientCard from '../../cards/ClientCard';

const Clients = () => {
    const clientsLogo = [client1, client2, client3, client4, client5, client6, client7, client8, client9, client10, client11, client12];
    return (
        <section className='clients py-5'>
            <MainSectionHeading
                titleContent='OUR CLIENTS'
                showLines={true}
            />
            <div className='container justify-content-between d-flex flex-wrap pt-4'>
                {clientsLogo.map((logo, i) => {
                    return (
                        <ClientCard
                            key={`client-logo-${i}`}
                            brandLogo={logo}
                        />
                    );
                })}
            </div>
        </section>
    );
};

export default Clients;

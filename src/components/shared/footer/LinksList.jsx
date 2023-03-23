import { Link } from 'react-router-dom';
const LinksList = ({ listTitle, links }) => {
    return (
        <div className='footer-links-list'>
            <h5 className='fw-bold mb-3'>{listTitle}</h5>
            <ul className='d-flex flex-column gap-2 p-0 m-0'>
                {links.map((link, i) => {
                    return (
                        <li key={`${listTitle}-link-${i + 1}`}>
                            <Link to={link.path}>{link.content}</Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default LinksList;

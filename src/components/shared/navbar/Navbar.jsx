import './navbar.css';
import logo from '../../../assets/logo.png';
import dropdownArrow from '../../../assets/decor/dropdown-arrow.png';

import { Link } from 'react-router-dom';
import { useState } from 'react';

const Navbar = () => {
    const [language, setLanguage] = useState('EN');
    const [isToggle, setIsToggle] = useState(false);
    const [toggleLanguageDropdown, setToggleLanguageDropdown] = useState(false);

    return (
        <nav>
            <div className='container d-flex justify-content-between align-items-center'>
                {/* LOGO */}
                <Link
                    to='/'
                    className='logo'
                >
                    <img
                        src={logo}
                        alt='Website Logo'
                    />
                </Link>
                {/* TOGGLE BUTTON */}
                <div
                    className={`toggle-menu ${isToggle ? 'animate-toggle-menu' : ''}`}
                    onClick={() => setIsToggle(!isToggle)}
                >
                    <span className='toggle-menu-bar'></span>
                    <span className='toggle-menu-bar'></span>
                    <span className='toggle-menu-bar'></span>
                </div>
                <div className={`list-wrapper py-3 p-lg-0 gap-3 gap-lg-5 d-flex justify-content-between align-items-center ${isToggle ? 'is-open' : ''}`}>
                    {/* LINKS LIST */}
                    <ul className='links-list d-flex gap-3 gap-lg-4 justify-content-between align-items-center m-0 p-0'>
                        <li className={`navbar-link`}>
                            <Link to='/'>About us</Link>
                        </li>
                        <li className={`navbar-link`}>
                            <Link to='/'>Portfolio</Link>
                        </li>
                        <li className={`navbar-link`}>
                            <Link to='/'>Order site</Link>
                        </li>
                        <li className={`navbar-link`}>
                            <Link to='/'>Design</Link>
                        </li>
                        <li className={`navbar-link`}>
                            <span>Services</span>
                            <ul className='services-dropdown d-none'>
                                <li>
                                    <Link to='/'>Calculator for the site</Link>
                                </li>
                                <li>
                                    <Link to='/'>Integration</Link>
                                </li>
                                <li>
                                    <Link to='/'>Site testing</Link>
                                </li>
                                <li>
                                    <Link to='/'>Site layout</Link>
                                </li>
                                <li>
                                    <Link to='/'>Parsing goods</Link>
                                </li>
                                <li>
                                    <Link to='/'>Articles</Link>
                                </li>
                                <li>
                                    <Link to='/'>Website improvement</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                    {/* LANGUGAE DROPDOWN */}
                    <div
                        className='languages-wrappper d-flex flex-wrap gap-2 justify-content-center align-items-center'
                        onClick={() => setToggleLanguageDropdown(!toggleLanguageDropdown)}
                    >
                        <span className='language'>{language}</span>
                        <img
                            className={`dropdown-arrow ${toggleLanguageDropdown ? 'rotateArrow' : ''}`}
                            src={dropdownArrow}
                            alt='Language Dropdown'
                        />
                        <ul className={`languages-dropdown m-0 p-0 ${toggleLanguageDropdown ? 'is-open' : ''}`}>
                            <li
                                className={`language-option ${language === 'RU' && 'is-active'}`}
                                onClick={() => setLanguage('RU')}
                            >
                                RU
                            </li>
                            <li
                                className={`language-option ${language === 'UK' && 'is-active'}`}
                                onClick={() => setLanguage('UK')}
                            >
                                UK
                            </li>
                            <li
                                className={`language-option ${language === 'EN' && 'is-active'}`}
                                onClick={() => setLanguage('EN')}
                            >
                                EN
                            </li>
                            <li
                                className={`language-option ${language === 'PL' && 'is-active'}`}
                                onClick={() => setLanguage('PL')}
                            >
                                PL
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;

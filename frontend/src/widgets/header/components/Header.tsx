import accountLight from '../assets/account-light.svg';
import accountDark from '../assets/account-dark.svg';
import darkTheme from '../assets/dark-theme.svg';
import lightTheme from '../assets/light-theme.svg';
import menuLight from '../assets/menu-light.svg';
import menuDark from '../assets/menu-dark.svg';
import logo from '../../../shared//assets/logo.svg';
import { useState } from 'react';
import { toggleTheme } from '../../../features';
import { NavLink } from 'react-router-dom';

interface HeaderProps {
    isHome: boolean;
}

export function Header({ isHome = false }: HeaderProps) {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const headerBackground = isHome ? 'bg-none' : 'main-gradient';

    const lightIconStyle = isLightTheme ? 'w-full h-full hidden' : 'w-full h-full';
    const darkIconStyle = isLightTheme ? 'w-full h-full' : 'w-full h-full hidden';

    const navListStyle = isMenuOpen
        ? 'absolute flex-col top-[100%] left-1/2 -translate-x-1/2 w-full z-30'
        : 'hidden lg:flex justify-between items-center';
    const navItemStyle = isMenuOpen
        ? 'leading-10 w-full text-center mr-0 border-b-[1px] border-gray-300'
        : 'text-link lg:text-xl mr-8 last:mr-0';

    function toggleThemeHandler() {
        setIsLightTheme((prev) => !prev);
        toggleTheme();
    }

    return (
        <header id='header' className={'relative ' + headerBackground}>
            <div className='container mx-auto px-2 sm:px-0'>
                <div id='header-wrapper'>
                    {/* Logo */}
                    <a className='flex items-center hover:cursor-pointer'>
                        <div className='block w-8 h-8 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 mr-2'>
                            <img src={logo} alt='Sombrero' />
                        </div>
                        <span className='md:text-2xl lg:text-3xl inline-block'>Sombrero</span>
                    </a>

                    {/* Navigation  */}
                    <nav>
                        <ul className={navListStyle}>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow' : 'dark:text-white')}
                                    to={'/'}>
                                    Главная
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow' : 'dark:text-white')}
                                    to={'/advertisements'}>
                                    Каталог
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow' : 'dark:text-white')}
                                    to={'/faqs'}>
                                    FAQ
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow' : 'dark:text-white')}
                                    to={'/contacts'}>
                                    Контакты
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow' : 'dark:text-white')}
                                    to={'/help'}>
                                    Помощь
                                </NavLink>
                            </li>
                        </ul>
                    </nav>

                    {/* Icons */}
                    <div className='flex justify-between items-center gap-3 sm:gap-12'>
                        {/* Theme icons */}
                        {!isHome && (
                            <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer' onClick={() => toggleThemeHandler()}>
                                <img className={darkIconStyle} src={lightTheme} alt='light-theme' />
                                <img className={lightIconStyle} src={darkTheme} alt='dark-theme' />
                            </div>
                        )}

                        {/* Account icons */}
                        <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'>
                            <img className={lightIconStyle} src={accountLight} alt='Account-light' />
                            <img className={darkIconStyle} src={accountDark} alt='Account-dark' />
                        </div>

                        {/* Menu icons */}
                        <div
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className='w-5 h-5 sm:w-8 sm:h-8 lg:hidden cursor-pointer'>
                            <img className={lightIconStyle} src={menuLight} alt='Menu-light' />
                            <img className={darkIconStyle} src={menuDark} alt='Menu-dark' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

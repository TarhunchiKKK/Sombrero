import accountLight from '../assets/account-light.svg';
import accountDark from '../assets/account-dark.svg';
import darkTheme from '../assets/dark-theme.svg';
import lightTheme from '../assets/light-theme.svg';
import menuLight from '../assets/menu-light.svg';
import menuDark from '../assets/menu-dark.svg';
import logo from '../../../shared//assets/logo.svg';
import { useContext, useState } from 'react';
import { toggleTheme } from '../../../features';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../../shared/hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { AuthModalContext } from '../../authModal/context/AuthModalContext';

interface HeaderProps {
    isHome: boolean;
}

export function Header({ isHome = false }: HeaderProps) {
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const navigate = useNavigate();
    const { openAuthModal } = useContext(AuthModalContext);

    const navListStyle = isMenuOpen
        ? 'absolute flex-col top-[100%] left-1/2 -translate-x-1/2 w-full'
        : 'hidden lg:flex justify-between items-center';
    const navItemStyle = isMenuOpen
        ? 'leading-10 w-full text-center mr-0 border-b-[1px] border-gray-300'
        : 'text-link lg:text-xl mr-8 last:mr-0';

    const textColor: string = isHome ? '' : 'dark:text-white';

    function handleToggleTheme(_: React.MouseEvent<HTMLDivElement>) {
        toggleTheme();
    }

    function handleAccountClick(_: React.MouseEvent<HTMLDivElement>) {
        if (useAuth()) {
            navigate('/account');
        } else {
            openAuthModal();
        }
    }

    function handleOpenMenu(_: React.MouseEvent<HTMLDivElement>) {
        setIsMenuOpen((prev) => !prev);
    }

    return (
        <header id='header' className={'main-gradient relative'}>
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
                    <nav className='relative z-30'>
                        <ul className={navListStyle}>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow-400' : textColor)}
                                    to={'/home'}>
                                    Главная
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow-400' : textColor)}
                                    to={'/advertisements'}>
                                    Каталог
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow-400' : textColor)}
                                    to={'/faqs'}>
                                    FAQ
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow-400' : textColor)}
                                    to={'/contacts'}>
                                    Контакты
                                </NavLink>
                            </li>
                            <li className={navItemStyle}>
                                <NavLink
                                    className={({ isActive }) => (isActive ? 'text-yellow-400' : textColor)}
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
                            <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer' onClick={handleToggleTheme}>
                                <img className='hidden dark:block' src={lightTheme} alt='light-theme' />
                                <img className='block dark:hidden' src={darkTheme} alt='dark-theme' />
                            </div>
                        )}

                        {/* Account icons */}
                        <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer' onClick={handleAccountClick}>
                            <img className='block dark:hidden' src={accountLight} alt='Account-light' />
                            <img className='hidden dark:block' src={accountDark} alt='Account-dark' />
                        </div>

                        {/* Menu icons */}
                        <div onClick={handleOpenMenu} className='w-5 h-5 sm:w-8 sm:h-8 lg:hidden cursor-pointer'>
                            <img className='hidden dark:block' src={menuLight} alt='Menu-light' />
                            <img className='block darK:hidden' src={menuDark} alt='Menu-dark' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

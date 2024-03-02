import accountLight from '../assets/header/account-light.svg'
import accountDark from '../assets/header/account-dark.svg'
import darkTheme from '../assets/header/dark-theme.svg'
import lightTheme from '../assets/header/light-theme.svg'
import menuLight from '../assets/header/menu-light.svg'
import menuDark from '../assets/header/menu-dark.svg'
import logo from '../assets/header/logo.svg'
import { useState } from 'react'
import toggleTheme from '../utils/toggleTheme.ts'

interface HeaderProps {
    isHome: boolean
}

export default function Header({ isHome = false }: HeaderProps) {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true)
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

    const headerBackground = isHome ? 'bg-none' : 'main-gradient'

    const lightIconStyle = isLightTheme
        ? 'w-full h-full hidden'
        : 'w-full h-full'
    const darkIconStyle = isLightTheme
        ? 'w-full h-full'
        : 'w-full h-full hidden'

    const navListStyle = isMenuOpen
        ? 'absolute flex-col top-[100%] left-1/2 -translate-x-1/2 w-full z-30'
        : 'hidden lg:flex justify-between items-center'
    const navItemStyle = isMenuOpen
        ? 'leading-10 w-full text-center mr-0 border-b-[1px] border-gray-300'
        : 'text-link lg:text-xl mr-8 last:mr-0'

    function toggleThemeHandler() {
        setIsLightTheme((prev) => !prev)
        toggleTheme()
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
                        <span className='md:text-2xl lg:text-3xl inline-block'>
                            Sombrero
                        </span>
                    </a>

                    {/* Navigation  */}
                    <nav>
                        <ul className={navListStyle}>
                            <li className={navItemStyle}>Каталог</li>
                            <li className={navItemStyle}>Доставка</li>
                            <li className={navItemStyle}>О нас</li>
                            <li className={navItemStyle}>Помощь</li>
                        </ul>
                    </nav>

                    {/* Icons */}
                    <div className='flex justify-between items-center gap-3 sm:gap-12'>
                        {/* Theme icons */}
                        {!isHome && (
                            <div
                                className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'
                                onClick={() => toggleThemeHandler()}>
                                <img
                                    className={darkIconStyle}
                                    src={lightTheme}
                                    alt='light-theme'
                                />
                                <img
                                    className={lightIconStyle}
                                    src={darkTheme}
                                    alt='dark-theme'
                                />
                            </div>
                        )}

                        {/* Account icons */}
                        <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'>
                            <img
                                className={lightIconStyle}
                                src={accountLight}
                                alt='Account-light'
                            />
                            <img
                                className={darkIconStyle}
                                src={accountDark}
                                alt='Account-dark'
                            />
                        </div>

                        {/* Menu icons */}
                        <div
                            onClick={() => setIsMenuOpen((prev) => !prev)}
                            className='w-5 h-5 sm:w-8 sm:h-8 lg:hidden cursor-pointer'>
                            <img
                                className={lightIconStyle}
                                src={menuLight}
                                alt='Menu-light'
                            />
                            <img
                                className={darkIconStyle}
                                src={menuDark}
                                alt='Menu-dark'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

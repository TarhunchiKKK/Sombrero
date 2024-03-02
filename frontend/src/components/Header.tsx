import accountLight from '../assets/header/account-light.svg'
import accountDark from '../assets/header/account-dark.svg'
import darkTheme from '../assets/header/dark-theme.svg'
import lightTheme from '../assets/header/light-theme.svg'
import menuLight from '../assets/header/menu-light.svg'
import menuDark from '../assets/header/menu-dark.svg'
import logo from '../assets/header/logo.svg'
import { useState } from 'react'

export default function Header() {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true)
    const lightIconStyle = isLightTheme
        ? 'w-full h-full'
        : 'w-full h-full hidden'
    const darkIconsStyle = isLightTheme
        ? 'w-full h-full hidden'
        : 'w-full h-full'

    return (
        <header
            style={{
                background: isLightTheme
                    ? 'linear-gradient(90deg, #8d90e3,#9ec0ea,#8d90e3)'
                    : 'linear-gradient(90deg, #8aa0c7,#5e6a9d,#30284e)',
            }}
            id='header'
            className='relative'>
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
                        <ul className='hidden lg:flex justify-between items-center'>
                            <li className='text-link lg:text-xl hover:cursor-pointer mr-8 last:mr-0'>
                                Каталог
                            </li>
                            <li className='text-link lg:text-xl hover:cursor-pointer mr-8 last:mr-0'>
                                Доставка
                            </li>
                            <li className='text-link lg:text-xl hover:cursor-pointer mr-8 last:mr-0'>
                                О нас
                            </li>
                            <li className='text-link lg:text-xl hover:cursor-pointer mr-8 last:mr-0'>
                                Помощь
                            </li>
                        </ul>
                    </nav>

                    {/* Icons */}
                    <div className='flex justify-between items-center gap-3 sm:gap-12'>
                        <div
                            className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'
                            onClick={() => setIsLightTheme((prev) => !prev)}
                            id='theme'>
                            <img
                                className={darkIconsStyle}
                                src={lightTheme}
                                alt='light-theme'
                            />
                            <img
                                className={lightIconStyle}
                                src={darkTheme}
                                alt='dark-theme'
                            />
                        </div>
                        <div
                            className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'
                            id='account'>
                            <img
                                className={lightIconStyle}
                                src={accountLight}
                                alt='Account-light'
                            />
                            <img
                                className={darkIconsStyle}
                                src={accountDark}
                                alt='Account-dark'
                            />
                        </div>
                        <div
                            className='w-5 h-5 sm:w-8 sm:h-8 lg:hidden cursor-pointer'
                            id='menu'>
                            <img
                                className={lightIconStyle}
                                src={menuLight}
                                alt='Menu-light'
                            />
                            <img
                                className={darkIconsStyle}
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

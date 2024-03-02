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
    isTransparent: boolean
}

export default function Header({ isTransparent = false }: HeaderProps) {
    const [isLightTheme, setIsLightTheme] = useState<boolean>(true)
    const headerBackground = isTransparent
        ? 'bg-none'
        : 'bg-light-gradient dark:bg-dark-gradient'
    const lightIconStyle = isLightTheme
        ? 'w-full h-full'
        : 'w-full h-full hidden'
    const darkIconsStyle = isLightTheme
        ? 'w-full h-full hidden'
        : 'w-full h-full'

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
                        {/* Theme icons */}
                        {!isTransparent && (
                            <div
                                className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'
                                // onClick={() => setIsLightTheme((prev) => !prev)}
                                onClick={() => toggleTheme()}
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
                        )}

                        {/* Account icons */}
                        <div className='w-5 h-5 sm:w-8 sm:h-8 cursor-pointer'>
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

                        {/* Menu icons */}
                        <div className='w-5 h-5 sm:w-8 sm:h-8 lg:hidden cursor-pointer'>
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

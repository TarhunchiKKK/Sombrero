interface FooterProps {
    isHome?: boolean
}

export function Footer({ isHome = false }: FooterProps) {
    const linkStyle = 'w-4 h-4 text-base sm:text-2xl sm:w-6 sm:h-6 text-black '

    return (
        <>
            {!isHome && (
                <footer className='w-full pt-[18px] pb-[15px] main-gradient'>
                    <div className='container mx-auto'>
                        {/* Icons */}
                        <div className='mx-auto flex justify-between items-center w-2/3 md:w-80 mb-4'>
                            <a target='_blank' href='#'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-facebook-f'
                                    }></i>
                            </a>
                            <a target='_blank' href='#'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-twitter'
                                    }></i>
                            </a>
                            <a target='_blank' href='#'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-google'
                                    }></i>
                            </a>
                            <a target='_blank' href='#'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-pinterest'
                                    }></i>
                            </a>
                            <a
                                target='_blank'
                                href='https://www.instagram.com/_tarhunchick_/'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-instagram'
                                    }></i>
                            </a>
                            <a target='_blank' href='#'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-telegram'
                                    }></i>
                            </a>
                            <a
                                target='_blank'
                                href='https://github.com/TarhunchiKKK/Sombrero'>
                                <i
                                    className={
                                        linkStyle + 'fa-brands fa-github'
                                    }></i>
                            </a>
                        </div>

                        {/* Text */}
                        <div className='text-center'>
                            <span className='text-base'>
                                © 2015 Axure Themes
                            </span>
                        </div>
                    </div>
                </footer>
            )}
        </>
    )
}

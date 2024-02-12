import redhat from '../assets/redhat.svg'
import theme from '../assets/light-theme.svg'
import account from '../assets/account.svg'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <header className='z-20 fixed top-0 left-1/2 -translate-x-1/2'>
            <div className="container">
                <div className="header-wrapper">
                    <div className="flex">
                        <div className="w-10 h-10 mr-2">
                            <img src={redhat} alt="Redhat" />
                        </div>
                        <span className="text-3xl">Sombrero</span>
                    </div>
                    <nav className="flex justify-between items-center w-1/3">
                        <Link to=''>Каталог</Link>
                        <Link to=''>Доставка</Link>
                        <Link to=''>О нас</Link>
                        <Link to=''>Помощь</Link>
                    </nav>
                    <div className="header-icons">
                        <div className="w-8 h-8 mr-6"> 
                            <img src={theme} alt="Theme" />
                        </div>
                        <div className="w-8 h-8">
                            <img src={account} alt="Account" />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}
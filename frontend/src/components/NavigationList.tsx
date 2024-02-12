import { Link } from "react-router-dom";

export default function NavigationList() {
    return (
        <nav className='navigation'>
            <Link to=''>Каталог</Link>
            <Link to=''>Доставка</Link>
            <Link to=''>О нас</Link>
            <Link to=''>Помощь</Link>
        </nav>
    )
}
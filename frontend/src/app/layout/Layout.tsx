import { Outlet } from 'react-router-dom';
import { Footer, Header } from '../../widgets';

interface ILayoutProps {
    isHome?: boolean;
}

export function Layout({ isHome = false }: ILayoutProps) {
    return (
        <>
            <Header isHome={isHome} />
            <Outlet />
            {!isHome && <Footer />}
        </>
    );
}

import { createBrowserRouter } from 'react-router-dom';
import { AdvertisementPage } from '../../pages/advertisement/AdvertisementPage';
import { AccountPage } from '../../pages/account/AccountPage';
import { AccountEditPage } from '../../pages/account/AccountEditPage';
import { Layout } from '../layout/Layout';
import { ContactsPage, FaqPage, HelpPage, HomePage } from '../../pages';
import { AdvertisementsPage } from '../../pages/advertisements/AdvertisementsPage';
import { Header } from '../../widgets';

export const router = createBrowserRouter([
    {
        path: '/home',
        element: (
            <>
                <Header isHome={true} />
                <HomePage />
            </>
        ),
        // element: <Layout isHome={true} />,
        // children: [
        //     {
        //         index: true,
        //         element: <HomePage />,
        //     },
        // ],
    },
    {
        path: '/',
        element: <Layout isHome={false} />,
        children: [
            {
                path: 'advertisements',
                element: <AdvertisementsPage />,
            },
            {
                path: 'advertisements/:advertisementId',
                element: <AdvertisementPage />,
            },
            {
                path: 'account',
                element: <AccountPage />,
            },
            {
                path: 'account/edit',
                element: <AccountEditPage />,
            },
            {
                path: 'faqs',
                element: <FaqPage />,
            },
            {
                path: 'contacts',
                element: <ContactsPage />,
            },
            {
                path: 'help',
                element: <HelpPage />,
            },
        ],
    },
]);

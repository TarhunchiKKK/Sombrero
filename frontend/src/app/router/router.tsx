import { createBrowserRouter } from 'react-router-dom';
import { AccountPage } from '../../pages/AccountPage';
import { AccountEditPage } from '../../pages/AccountEditPage';
import { Layout } from '../layout/Layout';
import { AdvertisementPage, AdvertisementsPage, ContactsPage, FaqsPage, HelpPage, HomePage } from '../../pages';

export const router = createBrowserRouter([
    {
        path: '/home',
        element: <Layout isHome={true} />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
        ],
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
                element: <FaqsPage />,
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

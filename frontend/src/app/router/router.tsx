import { createBrowserRouter } from 'react-router-dom';
import { AdvertisementPage } from '../../pages/advertisement/AdvertisementPage';
import { AccountPage } from '../../pages/account/AccountPage';
import { AccountEditPage } from '../../pages/account/AccountEditPage';
import { Layout } from '../layout/Layout';
import { FaqPage, HelpPage, HomePage } from '../../pages';
import { AdvertisementsPage } from '../../pages/advertisements/AdvertisementsPage';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
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
                path: 'help',
                element: <HelpPage />,
            },
        ],
    },
]);

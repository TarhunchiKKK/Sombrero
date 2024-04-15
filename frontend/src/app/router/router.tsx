import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../../pages';
import { AdvertisementPage } from '../../pages/advertisement/AdvertisementPage';
import { AccountPage } from '../../pages/account/AccountPage';
import { AccountEditPage } from '../../pages/account/AccountEditPage';
import { getDefaultUser } from '../../entities/user';
import { Layout } from '../layout/Layout';

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                path: 'advertisements',
                // element: <AdvertisementsPage />,
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
        ],
    },
]);

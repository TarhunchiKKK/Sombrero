import { useDispatch } from 'react-redux';
import { getTokenFromLocalStorge } from './widgets/authModal/helpers/localStorage';
import { getProfile, setCurrentUser } from './entities/user';
import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app';

export function App() {
    const dispatch = useDispatch();
    async function checkAuth() {
        const token = getTokenFromLocalStorge();
        try {
            if (token) {
                const data = await getProfile();
                if (data) {
                    console.log(data);
                    dispatch(setCurrentUser(data));
                }
            }
        } catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        // checkAuth();
    }, []);

    return <RouterProvider router={router} />;
}

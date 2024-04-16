import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { router, store } from './app/index.ts';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AuthModalLayout } from './widgets/authModal/context/AuthModalContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <AuthModalLayout>
                <RouterProvider router={router} />
            </AuthModalLayout>
        </Provider>
    </React.StrictMode>,
);

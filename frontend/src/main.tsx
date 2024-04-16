import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { router, store } from './app/index.ts';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { AuthModal } from './widgets/authModal/AuthModal.tsx';
import { ConfirmForm } from './widgets/authModal/forms/ConfirmForm.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <RouterProvider router={router} /> */}
            <AuthModal />
        </Provider>
    </React.StrictMode>,
);

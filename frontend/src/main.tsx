import React from 'react';
import ReactDOM from 'react-dom/client';
import './app/styles/index.css';
import { store } from './app/index.ts';
import { Provider } from 'react-redux';
import { AuthModalLayout } from './widgets/authModal/context/AuthModalContext.tsx';
import { App } from './App.tsx';
import { ContactsPage } from './pages/index.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            {/* <AuthModalLayout>
                <App />
            </AuthModalLayout> */}
            <ContactsPage />
        </Provider>
    </React.StrictMode>,
);

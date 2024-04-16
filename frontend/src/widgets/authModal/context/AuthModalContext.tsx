import { createContext } from 'react';
import { AuthModal } from '../AuthModal';

const initialState = {
    isOpen: false,
    openAuthModal: function () {
        this.isOpen = true;
    },
    closeAuthModal: function () {
        this.isOpen = false;
    },
};

export const AuthModalContext = createContext(initialState);

export function AuthModalLayout({ children }: { children: JSX.Element }) {
    return (
        <AuthModalContext.Provider value={initialState}>
            {children}
            {initialState.isOpen && <AuthModal />}
        </AuthModalContext.Provider>
    );
}

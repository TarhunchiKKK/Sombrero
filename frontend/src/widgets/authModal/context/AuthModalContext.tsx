import { createContext, useMemo, useState } from 'react';
import { AuthModal } from '../AuthModal';

const initialState = {
    openAuthModal: function () {},
    closeAuthModal: function () {},
};

export const AuthModalContext = createContext(initialState);

export function AuthModalLayout({ children }: { children: JSX.Element }) {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const contextValue = useMemo(
        () => ({
            openAuthModal: function () {
                setIsOpen(true);
            },
            closeAuthModal: function () {
                setIsOpen(false);
            },
        }),
        [],
    );

    return (
        <AuthModalContext.Provider value={contextValue}>
            {children}
            {isOpen && <AuthModal />}
        </AuthModalContext.Provider>
    );
}

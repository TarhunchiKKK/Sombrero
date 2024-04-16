import { useContext, useState } from 'react';
import { LoginForm } from '../forms/LoginForm';
import { RegistrationForm } from '../forms/RegistrationForm';
import { ConfirmForm } from '../forms/ConfirmForm';
import { Tabs } from '../enums/Tabs';
import { AuthModalContext } from '../context/AuthModalContext';

const activetabBg: string = 'bg-[#eff1f3]';
const activeTabStyle: string = `w-1/2 h-full ${activetabBg} flex justify-center items-center cursor-pointer hover:${activetabBg}`;
const tabStyle: string = `w-1/2 h-full bg-white flex justify-center items-center cursor-pointer hover:${activetabBg}`;

export function AuthModal() {
    const [tab, setTab] = useState<string>(Tabs.Registration);
    const { closeAuthModal } = useContext(AuthModalContext);

    const tabHandler = (value: string) => {
        if (value !== tab) {
            setTab(value);
        }
    };

    return (
        <>
            <div
                className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-85'
                onClick={() => closeAuthModal()}></div>
            <div className='w-4/5 sm:w-1/2 xl:w-1/3 flex flex-col bg-white overflow-hidden rounded-2xl fixed z-50 top-1/4 left-1/2 -translate-x-1/2'>
                {/* Tabs */}
                <div className='flex flex-row h-10 border-b-2 border-[#d4d6d8]'>
                    {/* Login tab */}
                    <button
                        className={tab === Tabs.Login ? activeTabStyle : tabStyle}
                        onClick={() => tabHandler(Tabs.Login)}>
                        {Tabs.Login}
                    </button>

                    {/* Registrantion tab */}
                    <button
                        className={tab === Tabs.Registration ? activeTabStyle : tabStyle}
                        onClick={() => tabHandler(Tabs.Registration)}>
                        {Tabs.Registration}
                    </button>
                </div>

                {/* Form */}
                <div className='w-full'>
                    {tab === Tabs.Login && <LoginForm tab={(value: Tabs) => tabHandler(value)} />}
                    {tab === Tabs.Registration && <RegistrationForm tab={(value: Tabs) => tabHandler(value)} />}
                    {tab === Tabs.Confirm && <ConfirmForm />}
                </div>
            </div>
        </>
    );
}

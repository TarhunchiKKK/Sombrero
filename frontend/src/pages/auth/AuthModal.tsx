import { useState } from 'react'
import Login from './Login'
import Registration from './Registration'

enum Tabs {
    Login = 'Login',
    Registration = 'Registration',
    Confirm = 'Confirm',
}

const activetabBg: string = 'bg-[#eff1f3]'
const activeTabStyle: string = `w-1/2 h-full ${activetabBg} flex justify-center items-center cursor-pointer hover:${activetabBg}`
const tabStyle: string = `w-1/2 h-full bg-white flex justify-center items-center cursor-pointer hover:${activetabBg}`

export default function AuthModal() {
    const [tab, setTab] = useState<string>(Tabs.Login)

    const tabHandler = (value: string) => {
        if (value !== tab) {
            setTab(value)
        }
    }

    return (
        <>
            <div className='w-screen h-screen bg-black opacity-85'></div>
            <div className='w-1/2 flex flex-col bg-white overflow-hidden rounded-2xl absolute z-50 top-4 left-1/2 -translate-x-1/2'>
                {/* Tabs */}
                <div className='flex flex-row h-10 border-b-2 border-[#d4d6d8]'>
                    {/* Login tab */}
                    <button
                        // style={{ borderRight: '1px solid #d4d6d8' }}
                        className={
                            tab === Tabs.Login ? activeTabStyle : tabStyle
                        }
                        onClick={() => tabHandler(Tabs.Login)}>
                        {Tabs.Login}
                    </button>

                    {/* Registrantion tab */}
                    <button
                        className={
                            tab === Tabs.Registration
                                ? activeTabStyle
                                : tabStyle
                        }
                        onClick={() => tabHandler(Tabs.Registration)}>
                        {Tabs.Registration}
                    </button>
                </div>

                {/* Form */}
                <div className='w-full'>
                    {tab === Tabs.Login && (
                        <Login tab={() => tabHandler(Tabs.Registration)} />
                    )}
                    {tab === Tabs.Registration && (
                        <Registration tab={() => tabHandler(Tabs.Login)} />
                    )}
                </div>
            </div>
        </>
    )
}

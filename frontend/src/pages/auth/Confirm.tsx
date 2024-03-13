import { useRef } from 'react'

const passwordLength: number = 6
const password: string[] = new Array<string>(passwordLength)

export default function ConfirmModal() {
    return (
        <form className='flex flex-col bg-white'>
            <div className='w-4/5 flex flex-row justify-between items-center'>
                {password.map((_, idx) => (
                    <input
                        type='text'
                        placeholder='-'
                        className='w-4 h-4 flex justify-center items-center'
                        onChange={() => {}}
                        key={idx}
                    />
                ))}
            </div>
            <button className='main-gradient w-full h-10'>Confirm</button>
        </form>
    )
}

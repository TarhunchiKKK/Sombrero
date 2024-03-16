import { LegacyRef, useRef } from 'react'

const passwordLength: number = 6
const password: string[] = new Array<string>(passwordLength).fill('')

export default function ConfirmModal() {
    const refs: any = {
        ref0: useRef(null),
        ref1: useRef(null),
        ref2: useRef(null),
        ref3: useRef(null),
        ref4: useRef(null),
        ref5: useRef(null),
    }

    function getInputChangeHandler(idx: number) {
        function onChange(e: React.ChangeEvent<HTMLInputElement>) {
            const value = e.target.value
            if (value.length === 1) {
                refs[`ref${idx + 1}`].current.focus()
            } else if (value.length > 1) {
                let i: number = idx
                while (i < value.length && i < passwordLength) {
                    refs[`ref${i}`].current.value = value[i]
                    i++
                }
                if (i !== passwordLength) {
                    refs[`ref${idx}`].current.focus()
                }
            }
        }

        return onChange
    }

    return (
        <form className='flex flex-col bg-white'>
            <div className='w-3/5 mx-auto flex flex-row justify-between items-center'>
                {password.map((_, idx) => (
                    <input
                        type='text'
                        placeholder='-'
                        className='w-12 h-12 text-center outline-none border-2 rounded-lg'
                        ref={refs[`ref${idx}`]}
                        onChange={getInputChangeHandler(idx)}
                        key={idx}
                    />
                ))}
            </div>
            <button className='main-gradient w-full h-10'>Confirm</button>
        </form>
    )
}

import {  useRef } from 'react'

const passwordLength = 6
const password = new Array(passwordLength).fill('')

export default function Ad() {
    const refs = {
        ref0: useRef(null),
        ref1: useRef(null),
        ref2: useRef(null),
        ref3: useRef(null),
        ref4: useRef(null),
        ref5: useRef(null),
    }

    return (
        <>
            {password.map((_, idx) => <input type='text' placeholder='-' ref={refs[`ref${idx}`]} />)}
        </>
    )    
}
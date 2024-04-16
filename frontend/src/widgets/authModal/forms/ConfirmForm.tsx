import { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';
import { IRegistrationResult, setCurrentUser } from '../../../entities/user';
import { confirmVerificationCode } from '../../../entities/user/api/confirmVerificationCode';
import { useDispatch } from 'react-redux';
import { setTokenToLocalStorage } from '../helpers/localStorage';

export function ConfirmForm() {
    const [verificationCode, setVerificationCode] = useState<string>('');
    const email: string = useSelector((state: RootState) => state.registration.email);
    const dispatch = useDispatch();

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const result: IRegistrationResult = await confirmVerificationCode(email, verificationCode);
            dispatch(setCurrentUser(result.user));
            setTokenToLocalStorage(result.token);
            console.log('Confirm');
        } catch (err) {
            console.log(err);
        }
    }

    return (
        <form className='flex flex-col bg-white' onSubmit={handleSubmit}>
            <h3 className='mx-auto text-center w-[90%] sm:w-1/2 mt-4'>
                We have sent a confirmation code to your email. Check your email and paste the verification code here:
            </h3>
            <div className='w-3/5 mx-auto pt-4 pb-10 flex flex-row justify-center items-center'>
                <input
                    onChange={(e) => setVerificationCode(e.target.value)}
                    value={verificationCode}
                    className='h-10 block w-full outline-none border-2 rounded-lg px-2'
                    type='text'
                    placeholder='Paste your code here...'
                />
            </div>
            <button type='submit' className='main-gradient w-full h-10'>
                Confirm
            </button>
        </form>
    );
}

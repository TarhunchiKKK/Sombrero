import { SubmitHandler, useForm } from 'react-hook-form';
import { InputField } from '../components/InputField';
import { FormQuestion } from '../components/FormQuestion';
import { Tabs } from '../enums/Tabs';
import { login, setCurrentUser } from '../../../entities/user';
import { useDispatch } from 'react-redux';
import { setTokenToLocalStorage } from '../helpers/localStorage';
import { useContext } from 'react';
import { AuthModalContext } from '../context/AuthModalContext';

type LoginInputs = {
    email: string;
    password: string;
};

interface LoginProps {
    tab: (value: Tabs) => void;
}

export function LoginForm({ tab }: LoginProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>();

    const { closeAuthModal } = useContext(AuthModalContext);

    const dispatch = useDispatch();

    const onSubmit: SubmitHandler<LoginInputs> = async (data) => {
        try {
            const result = await login(data.email, data.password);
            if (result) {
                console.log(result);
                dispatch(setCurrentUser(result));
                setTokenToLocalStorage(result.token);
                closeAuthModal();
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col bg-white'>
            <div className='grow w-4/5 mx-auto'>
                <h2 className='text-center mt-4 mb-6'>Login</h2>
                {/* Email */}
                <InputField
                    field='email'
                    type='text'
                    placeholder='Enter email'
                    errors={errors}
                    register={register('email', { required: true })}
                />

                {/* Password */}
                <InputField
                    field='password'
                    type='password'
                    placeholder='Enter password'
                    errors={errors}
                    register={register('password', { required: true })}
                />

                {/* Don't have an account? */}
                <FormQuestion content="Don't have an account?" onClick={() => tab(Tabs.Registration)} />
            </div>
            <button className='main-gradient w-full h-10'>Login</button>
        </form>
    );
}

import { SubmitHandler, useForm } from 'react-hook-form'
import { InputField } from '../components/InputField'
import { FormQuestion } from '../components/FormQuestion'

type LoginInputs = {
    email: string
    password: string
}

interface LoginProps {
    tab: () => void
}

export function LoginForm({ tab }: LoginProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginInputs>()

    const onSubmit: SubmitHandler<LoginInputs> = (data) => {
        console.log(`Email: ${data.email}`)
        console.log(`Password: ${data.password}`)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='flex flex-col bg-white'>
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
                <FormQuestion
                    content="Don't have an account?"
                    onClick={() => tab()}
                />
            </div>
            <button className='main-gradient w-full h-10'>Login</button>
        </form>
    )
}

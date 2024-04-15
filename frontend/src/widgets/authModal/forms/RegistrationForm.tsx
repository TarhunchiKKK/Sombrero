import { SubmitHandler, useForm } from 'react-hook-form'
import { InputField } from '../components/InputField'
import { FormQuestion } from '../components/FormQuestion'

type RegistrationInputs = {
    email: string
    password1: string
    password2: string
}

interface RegistrationProps {
    tab: () => void
}

export function RegistrationForm({ tab }: RegistrationProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<RegistrationInputs>()

    const onSubmit: SubmitHandler<RegistrationInputs> = (data) => {
        console.log(`Email: ${data.email}`)
        console.log(`Password1: ${data.password1}`)
        console.log(`Password2: ${data.password2}`)
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className='w-full h-full flex flex-col bg-white'>
            <div className='grow w-4/5 mx-auto'>
                <h2 className='text-center mt-4 mb-6'>Registration</h2>
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
                    field='password1'
                    type='password'
                    placeholder='Enter password'
                    errors={errors}
                    register={register('password1', { required: true })}
                />

                {/* Confirm password */}
                <InputField
                    field='password2'
                    type='password'
                    placeholder='Confirm password'
                    errors={errors}
                    register={register('password2', { required: true })}
                />

                {/* Already have an account? */}
                <FormQuestion
                    content='Alrready have an account?'
                    onClick={() => tab()}
                />
            </div>

            {/* Submit button */}
            <button className='main-gradient w-full h-10'>Login</button>
        </form>
    )
}

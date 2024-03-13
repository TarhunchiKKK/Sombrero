interface InputFieldProps {
    type: string
    placeholder: string
    field: string
    register: any
    errors: any
}

export default function InputField({
    field,
    placeholder,
    type,
    errors,
    register,
}: InputFieldProps) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                {...register}
                className='mt-6 first-mt-0 h-10 block w-full outline-none border-2 rounded-lg px-2'
            />
            {errors[field] && (
                <span className='text-red-700 text-sm'>Email is required</span>
            )}
        </>
    )
}

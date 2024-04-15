interface FormQuestionProps {
    content: string
    onClick: () => void
}

export function FormQuestion({ content, onClick }: FormQuestionProps) {
    return (
        <a
            className='cursor-pointer w-full block text-center underline mt-6 mb-8 text-blue-600'
            onClick={() => onClick()}>
            {content}
        </a>
    )
}

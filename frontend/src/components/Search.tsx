interface SearchProps {
    className?: string
    onSubmit: () => void
}

export default function Search({ className = '', onSubmit }: SearchProps) {
    const formStyle: string =
        className +
        ' w-[720px] px-[7px] py-[6px] flex justify-between items-center main-gradient rounded-lg'

    return (
        <form className={formStyle} onSubmit={() => onSubmit()}>
            <input type='text' className='w-[613px] h-[38px] rounded-lg' />
            <button className='w-[84px]'>
                <span className='text-white text-xl'>Найти</span>
            </button>
        </form>
    )
}

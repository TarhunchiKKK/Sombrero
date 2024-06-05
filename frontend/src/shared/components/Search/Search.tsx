interface SearchProps {
    className: string
    placeholder: string
    onChange?: React.ChangeEventHandler<HTMLInputElement>
    onSubmit?: () => void
}

export function Search(props: SearchProps) {
    const formStyle: string =
        props.className +
        ' w-4/5 md:w-[720px] px-[7px] py-[6px] flex items-center main-gradient rounded-lg'

    return (
        <form className={formStyle} onSubmit={props.onSubmit}>
            <input
                onChange={props.onChange}
                type='text'
                className='w-full sm:w-[613px] h-[38px] rounded-lg outline-none pl-2'
                placeholder={props.placeholder}
            />

            <button className='w-[84px] ml-3 hidden sm:block'>
                <span className='text-white text-xl'>Найти</span>
            </button>
        </form>
    )
}

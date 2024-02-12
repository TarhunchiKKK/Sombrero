interface SliderDotProps {
    index: number
    isActive: boolean
    onClick: (index: number) => void
}

export default function SliderDot({ isActive, index, onClick }: SliderDotProps) {
    const dotStyle = 'rounded-full w-4 h-4 border-2 border-black'
    const activeDotStyle = 'rounded-full w-4 h-4 border-2 border-black bg-slate-900'

    function clickHandler(event: React.MouseEvent<HTMLSpanElement>) {
        onClick(index)
    }

    return (
        <span onClick={clickHandler} className={isActive ? activeDotStyle : dotStyle}></span>
    )
}
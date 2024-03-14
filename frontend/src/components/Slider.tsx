import { useEffect, useMemo, useState } from "react"
import { sliderImages } from "../data/sliderImages"

interface SliderProps {
    monitor: 'sm' | 'md' | 'lg'
}


export function Slider({monitor}: SliderProps) {
    // slides count is immutable
    const slidesCount: number = useMemo(() => sliderImages[monitor].length, [])
    const [currentSlide, setCurrentSlide] = useState<number>(0)


    useEffect(() => {
        function nextSlide() {
            if (currentSlide == slidesCount - 1) {
                setCurrentSlide(0)
            }
            else {
                setCurrentSlide(prev => prev + 1)
            }
        }

        const interval = setInterval(() => {
            nextSlide()
        }, 3000)

        
        return () => {
            clearInterval(interval)
        }
    }, [])

    // styles for slides
    const visibleSlideStyle: string = 'w-full h-full'
    const hiddenSlideStyle: string = 'w-full h-full hidden'

    // slides for dots
    const filledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black bg-[#3E3E3E]'
    const unfilledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black'

    console.log('render')

    return (
        <>
            {/* Slider images */}
            <div id={`slider-${monitor}`} className="relative w-screen h-screen">
                { sliderImages[monitor].map((image, index) => 
                    <div className={(index === currentSlide) ? visibleSlideStyle : hiddenSlideStyle} key={index}>
                        <img className="w-full h-full object-cover object-center" src={image} alt={`Slide${index}`} />
                    </div>
                )}
            </div>

            {/* Dots for slides  */}
            <ul id="slider-dots" className="absolute bottom-9 left-1/2 -translate-x-1/2 flex justify-between items-center w-52 md:w-1/3">
                { sliderImages[monitor].map((_, index) => 
                    <li onClick={() => setCurrentSlide(index)} className={currentSlide === index ? filledDotStyle : unfilledDotStyle} key={index}></li>
                )}
            </ul>
        </>
    )
}
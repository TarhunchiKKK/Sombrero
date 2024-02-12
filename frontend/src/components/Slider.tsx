import { useCallback, useEffect, useState } from 'react'
import slide0 from '../assets/slider/slide1.png'
import slide1 from '../assets/slider/slide2.jpg'
import slide2 from '../assets/slider/slide3.png'
import slide3 from '../assets/slider/slide4.webp'
import slide4 from '../assets/slider/slide5.jpg'
import SliderDot from './SliderDot'


const slides = [slide0, slide1, slide2, slide3, slide4]


export default function Slider() {
    const [slide, setSlide] = useState<number>(0)

    const getSlide = useCallback((n: number) => {
        return (
            <>
                <img className='w-full h-full object-cover object-center' src={slides[n]} alt="Slide 1" />
                <h1 className='slider-text w-1/4 absolute top-[60%] left-[20%]'>Наслаждайся моментом</h1>
            </>
        )
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            setSlide(prev => prev == slides.length - 1 ? 0 : prev + 1)
        }, 3000)

        return  () => {
            clearInterval(interval)
        }
    }, [slides])

    return (
        <div className="w-[100vw] h-[100vh] z-10 absolute top-0 left-0">
            { getSlide(slide) }
            <div className="flex justify-between items-center w-1/6 z-20 absolute left-1/2 -translate-x-1/2 bottom-8">
                { slides.map((_, index) => <SliderDot isActive={slide == index} index={index} onClick={setSlide} key={index}/>) }
            </div>
        </div>
    )
}
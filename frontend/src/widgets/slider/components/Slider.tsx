import { useEffect, useMemo, useState } from 'react';

// styles for slides
const visibleSlideStyle: string = 'w-full h-full';
const hiddenSlideStyle: string = 'w-full h-full hidden';

// slides for dots
const filledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black bg-[#3E3E3E]';
const unfilledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black';

interface SliderProps {
    getImages: () => any[];
}

export function Slider({ getImages }: SliderProps) {
    // slides count is immutable
    const images: any[] = useMemo(() => getImages(), []);
    const slidesCount: number = images.length;
    const [currentSlide, setCurrentSlide] = useState<number>(0);

    useEffect(() => {
        const interval = setInterval(() => {
            if (currentSlide === slidesCount - 1) {
                setCurrentSlide(0);
            } else {
                setCurrentSlide((prev) => prev + 1);
            }
        }, 3000);

        return () => {
            clearInterval(interval);
        };
    }, [currentSlide]);

    return (
        <>
            {/* Slider images */}
            <div className='relative w-screen h-screen'>
                {images.map((image, index) => (
                    <div className={index === currentSlide ? visibleSlideStyle : hiddenSlideStyle} key={index}>
                        <img className='w-full h-full object-cover object-center' src={image} alt={`Slide${index}`} />
                    </div>
                ))}
            </div>

            {/* Dots for slides  */}
            <ul
                id='slider-dots'
                className='absolute bottom-9 left-1/2 -translate-x-1/2 flex justify-between items-center w-52 md:w-1/3'>
                {images.map((_, index) => (
                    <li
                        onClick={() => setCurrentSlide(index)}
                        className={currentSlide === index ? filledDotStyle : unfilledDotStyle}
                        key={index}></li>
                ))}
            </ul>
        </>
    );
}

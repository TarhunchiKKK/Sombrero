import { useEffect, useState } from 'react';

// styles for slides
const visibleSlideStyle: string = 'w-full h-full';
const hiddenSlideStyle: string = 'w-full h-full hidden';

// slides for dots
const filledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black bg-black';
const unfilledDotStyle: string = 'w-4 h-4 border-2 rounded-full border-black';

interface ISliderProps {
    images: string[];
}

export function Slider({ images }: ISliderProps) {
    // slides count is immutable
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
            <div className='fixed top-0 left-0 z-20 w-screen h-screen'>
                {images.map((image, index) => (
                    <div className={index === currentSlide ? visibleSlideStyle : hiddenSlideStyle} key={image}>
                        <img className='w-full h-full object-cover object-center' src={image} alt={`Slide${index}`} />
                    </div>
                ))}
            </div>

            {/* Dots for slides  */}
            <ul
                id='slider-dots'
                className='absolute bottom-9 left-1/2 -translate-x-1/2 flex justify-between items-center w-48 md:w-1/3 z-30'>
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

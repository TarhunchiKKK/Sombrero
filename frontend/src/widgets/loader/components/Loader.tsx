import loaderLight from './assets/loader-light.svg';
import loaderDark from './assets/loader-dark.svg';
import { animated, useSpring } from '@react-spring/web';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';

export function Loader() {
    const springs = useSpring({
        from: {
            rotate: '0deg',
        },
        to: {
            rotate: '360deg',
        },
        loop: true,
    });

    const isLoading: boolean = useSelector((state: RootState) => state.loader.isLoading);

    return (
        <>
            {isLoading && (
                <div className='absolute z-50 w-20 h-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                    <animated.img src={loaderLight} className='w-full h-full dark:hidden' alt='Loader' {...springs} />
                    <animated.img src={loaderDark} className='w-full h-full light:hidden' alt='Loader' {...springs} />
                </div>
            )}
        </>
    );
}

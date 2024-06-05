import loaderLight from './assets/loader-light.svg';
import loaderDark from './assets/loader-dark.svg';

export function Loader() {
    return (
        <>
            <div className='fixed top-0 left-0 w-screen h-screen z-40 bg-black opacity-60'></div>
            <div className='absolute z-50 w-28 h-28 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                <img src={loaderLight} className='w-full h-full dark:hidden animate-spin' alt='Loader' />
                <img src={loaderDark} className='w-full h-full light:hidden animate-spin' alt='Loader' />
            </div>
        </>
    );
}

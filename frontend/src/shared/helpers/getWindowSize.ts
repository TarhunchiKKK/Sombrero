import { ScreenSizes } from '../enums/ScreenSizes';

export function getWindowSize(): ScreenSizes {
    const windowSize = window.innerWidth;
    console.log('Get window size');
    if (windowSize <= 640) {
        return ScreenSizes.Xs;
    } else if (windowSize <= 768) {
        return ScreenSizes.Sm;
    } else if (windowSize <= 1024) {
        return ScreenSizes.Md;
    } else if (windowSize <= 1280) {
        return ScreenSizes.Lg;
    } else if (windowSize <= 1536) {
        return ScreenSizes.Xl;
    } else {
        return ScreenSizes.Xxl;
    }
}

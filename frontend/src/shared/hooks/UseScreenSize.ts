import { useEffect, useState } from 'react';
import { ScreenSizes } from '../enums/ScreenSizes';
import { getWindowSize } from '../helpers/getWindowSize';

export function useScreenSize(): ScreenSizes {
    const [screenSize, setScreenSize] = useState<ScreenSizes>(() => getWindowSize());

    useEffect(() => {
        window.addEventListener('resize', () => {
            const windowSize = getWindowSize();
            console.log('Change window size');
            if (screenSize !== windowSize) {
                setScreenSize(windowSize);
            }
        });
    }, [screenSize]);

    return screenSize;
}

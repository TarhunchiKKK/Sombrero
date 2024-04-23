import { getWindowSize } from '../../shared';
import { Slider } from '../../widgets/slider/components/Slider';
import { sliderImages } from './consts/SliderImages';

export function HomePage() {
    const windowSize: string = getWindowSize();

    return (
        <section id='home'>
            {/* Slider */}
            <Slider getImages={() => sliderImages[windowSize]} />
        </section>
    );
}

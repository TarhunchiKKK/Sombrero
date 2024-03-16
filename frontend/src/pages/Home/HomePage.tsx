import { Slider } from '../../widgets/Slider/Slider'
import getWindowSize from '../../shared/helpers/getWindowSize'
import { sliderImages } from './consts/SliderImages'

export default function HomePage() {
    const windowSize: string = getWindowSize()

    return (
        <section id='home'>
            <Slider getImages={() => sliderImages[windowSize]} />
        </section>
    )
}

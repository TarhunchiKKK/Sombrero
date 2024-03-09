import { Slider } from "../components/Slider"
import getWindowSize from "../utils/getWindowSize"


export default function HomePage() {
    const windowSize: string = getWindowSize()
    
    return (
        <section id="home">
            { windowSize === 'sm' && <Slider monitor={windowSize} /> }
            { windowSize === 'md' && <Slider monitor={windowSize} /> }
            { windowSize === 'lg' && <Slider monitor={windowSize} /> }
        </section>
    )
}
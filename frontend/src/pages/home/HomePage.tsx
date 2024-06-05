import { useGetHomeImagesQuery } from '../../entities/home';
import { Slider } from '../../widgets/slider/Slider';

export function HomePage() {
    const { data: images } = useGetHomeImagesQuery();

    return (
        <section id='home'>
            {/* Slider */}
            {images && <Slider images={images.map((image) => image.filename)} />}
        </section>
    );
}

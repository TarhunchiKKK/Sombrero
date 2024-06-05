import { useGetHomeImagesQuery } from '../entities/home';
import { ScreenSizes, SERVER_URL, useScreenSize } from '../shared';
import { Slider } from '../widgets';

export function HomePage() {
    const screenSize: ScreenSizes = useScreenSize();
    const { data: images } = useGetHomeImagesQuery(screenSize);

    return (
        <section id='home'>
            {/* Slider */}
            {images && <Slider images={images.map((image) => `${SERVER_URL}/files/${image.filename}`)} />}
        </section>
    );
}

import { useGetHomeImagesQuery } from '../../entities/home';
import { SERVER_URL } from '../../shared';
import { Slider } from '../../widgets/slider/Slider';

export function HomePage() {
    const { data: images } = useGetHomeImagesQuery();

    return (
        <section id='home'>
            {/* Slider */}
            {images && <Slider images={images.map((image) => `${SERVER_URL}/files/${image.filename}`)} />}
        </section>
    );
}

import { useCallback, useEffect, useState } from 'react';
import { IAdvertisement } from '../../../entities/advertisement/models/IAdvertisementInfo';
import { GetColumnsCount } from '../helpers/GetColumnsCount';
import { Advertisement } from './Advertisement';
import { GetAdvertisements } from '../../../entities/advertisement/api/GetAdvertisements';

const advertisements: IAdvertisement[] = await GetAdvertisements();

export function AdvertisementsContainer() {
    const [columnsCount, setColumnsCount] = useState<number>(GetColumnsCount());

    const handleWindowResize = useCallback(() => {
        if (columnsCount !== GetColumnsCount()) {
            setColumnsCount(GetColumnsCount());
        }
    }, [columnsCount]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    return (
        <section id='catalog'>
            <div className='container mx-auto'>
                <div
                    style={{ gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))` }}
                    className='grid gap-x-2 gap-y-4'>
                    {advertisements.map((a) => (
                        <Advertisement advertisement={a} key={a.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

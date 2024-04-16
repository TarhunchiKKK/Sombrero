import { useCallback, useEffect, useState } from 'react';
import { GetColumnsCount } from '../helpers/GetColumnsCount';
import { Advertisement } from './Advertisement';
import { getAdvertisements } from '../../../entities/advertisement/api/GetAdvertisements';
import { IAdvertisementInfo } from '../../../entities/advertisement';

export function AdvertisementsContainer() {
    const [advertisements, setAdvertisements] = useState<IAdvertisementInfo[]>([]);
    const [columnsCount, setColumnsCount] = useState<number>(GetColumnsCount());

    const handleWindowResize = useCallback(() => {
        if (columnsCount !== GetColumnsCount()) {
            setColumnsCount(GetColumnsCount());
        }
    }, [columnsCount]);

    useEffect(() => {
        async function fetchAdvertisements() {
            const data = await getAdvertisements();
            setAdvertisements(data);
        }

        fetchAdvertisements();
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
                    className='grid gap-x-4 gap-y-4'>
                    {advertisements.map((a) => (
                        <Advertisement advertisement={a} key={a.id} />
                    ))}
                </div>
            </div>
        </section>
    );
}

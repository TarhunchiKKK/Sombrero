import { useCallback, useEffect, useState } from 'react';
import { GetColumnsCount } from '../helpers/GetColumnsCount';
import { Advertisement } from './Advertisement';
import { getAdvertisements } from '../../../entities/advertisement/api/GetAdvertisements';
import { IAdvertisementInfo } from '../../../entities/advertisement';
import { useSelector } from 'react-redux';
import { RootState } from '../../../app/store/store';

interface IAdvertisementContainerProps {
    searchedAdveertisement: string;
}

export function AdvertisementsContainer({ searchedAdveertisement }: IAdvertisementContainerProps) {
    const categoryId: number | null = useSelector((state: RootState) => state.search.categoryId);

    const [advertisements, setAdvertisements] = useState<IAdvertisementInfo[]>([]);
    const [columnsCount, setColumnsCount] = useState<number>(GetColumnsCount());

    const handleWindowResize = useCallback(() => {
        if (columnsCount !== GetColumnsCount()) {
            setColumnsCount(GetColumnsCount());
        }
    }, [columnsCount]);

    useEffect(() => {
        async function fetchAdvertisements() {
            const data = await getAdvertisements(categoryId);
            setAdvertisements(data);
        }
        fetchAdvertisements();
    }, [categoryId]);

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);

        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    return (
        <section id='catalog'>
            <div className='container mx-auto'>
                <div
                    style={{ gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))` }}
                    className='grid gap-x-4 gap-y-4'>
                    {advertisements
                        .filter((a) => a.title.includes(searchedAdveertisement.toLowerCase()))
                        .map((a) => (
                            <Advertisement advertisement={a} key={a.id} />
                        ))}
                </div>
            </div>
        </section>
    );
}

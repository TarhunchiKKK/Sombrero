import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../app';
import { AdvertisementsContainer, CategoriesContainer } from '../widgets';
import { PageTitle, Search } from '../shared';
import { resetSearchCategory } from '../entities';

export function AdvertisementsPage() {
    const dispatch = useDispatch();
    const [searchedAdvertisement, setSearchedAdvertisement] = useState<string>('');

    const categoryId: number | null = useSelector((state: RootState) => state.search.categoryId);

    return (
        <main className='py-6 px-2 sm:px-0 relative'>
            <div className='container mx-auto'>
                <PageTitle title='Каталог' />

                <Search
                    className='mx-auto mb-6 sm:mb-14 lg:mb-18'
                    placeholder='Что ищешь?'
                    onChange={(e) => setSearchedAdvertisement(e.target.value)}
                />
                <CategoriesContainer />
                <AdvertisementsContainer searchedAdveertisement={searchedAdvertisement} />
            </div>

            {/* КНопка сроса катер=гории поиска */}
            {categoryId && (
                <button
                    className='absolute left-4 top-4 rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-200'
                    onClick={() => dispatch(resetSearchCategory())}>
                    {/* <i className='fa-solid fa-arrow-left text-2xl'></i> */}
                    <i className='fa-solid fa-rotate-right text-3xl'></i>
                </button>
            )}
        </main>
    );
}

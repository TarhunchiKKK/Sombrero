import { useCallback, useEffect, useState } from 'react';
import { ICategory } from '../../../entities';
import { GetCategories } from '../api/GetCategories';
import { GetColumnsCount } from '../helpers/GetColumnsCount';
import { CategoryButton } from './CategoryButton';

const categories: ICategory[] = await GetCategories();

interface ICategoriesContainerProps {
    onClick: (id: number) => void;
}

export function CategoriesContainer({ onClick }: ICategoriesContainerProps) {
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
        <section id='categories' className='py-4 px-2'>
            <div className='container mx-auto'>
                <div
                    style={{
                        gridTemplateColumns: `repeat(${columnsCount}, minmax(0, 1fr))`,
                    }}
                    className='grid gap-x-2 gap-y-4'>
                    {categories.map((category) => (
                        <CategoryButton
                            key={category.id}
                            category={category}
                            onClick={() => onClick(category.id)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

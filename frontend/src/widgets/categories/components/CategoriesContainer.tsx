import { useCallback, useEffect, useState } from 'react';
import { GetColumnsCount } from '../helpers/GetColumnsCount';
import { CategoryButton } from './CategoryButton';
import { ICategoryInfo } from '../../../entities/category/models/ICategoryInfo';
import { getCategories } from '../../../entities/category';

interface ICategoriesContainerProps {
    onClick: (id: number) => void;
}

export function CategoriesContainer({ onClick }: ICategoriesContainerProps) {
    const [categories, setcategories] = useState<ICategoryInfo[]>([]);
    const [columnsCount, setColumnsCount] = useState<number>(GetColumnsCount());

    const handleWindowResize = useCallback(() => {
        if (columnsCount !== GetColumnsCount()) {
            setColumnsCount(GetColumnsCount());
        }
    }, [columnsCount]);

    useEffect(() => {
        async function fetchCategories() {
            const data = await getCategories();
            setcategories(data);
        }

        fetchCategories();
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
                        <CategoryButton key={category.id} category={category} onClick={() => onClick(category.id)} />
                    ))}
                </div>
            </div>
        </section>
    );
}

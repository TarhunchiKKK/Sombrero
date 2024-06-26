import { ICategoryInfo } from '../../../entities/category/models/ICategoryInfo';

interface ICategoryButtonProps {
    category: ICategoryInfo;
    onClick: () => void;
}

export function CategoryButton({ category, onClick }: ICategoryButtonProps) {
    return (
        <button
            onClick={() => onClick()}
            className='flex justify-center items-center main-gradient min-h-8 rounded-lg dark:text-white text-xl py-2'>
            {category.title}
        </button>
    );
}

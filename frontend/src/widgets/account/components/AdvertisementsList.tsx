import { IAdvertisementInfo } from '../../../entities/advertisement';
import { Advertisement } from './Advertisement';

interface IAdvertisementsListProps {
    title: string;
    advertisements: IAdvertisementInfo[];
}

export function AdvertisementsList({ title, advertisements }: IAdvertisementsListProps) {
    return (
        <div className='py-2 px-4'>
            <h4 className='font-bold text-xl after:my-4 after:w-full after:block after:h-[2px] after:bg-black'>
                {title}
            </h4>
            <div className='grid grid-cols-4 gap-4'>
                {advertisements.map((a) => (
                    <Advertisement advertisement={a} key={a.id} />
                ))}
            </div>
        </div>
    );
}

import { useState } from 'react';
import { SERVER_URL } from '../../../shared';
import { IAdvertisement } from '../../../entities/advertisement/models/IAdvertisementInfo';
import { likeAdvertisement } from '../../../entities/advertisement/api/LikeAdvertisement';

interface IAdvertisementProps {
    advertisement: IAdvertisement;
}

export function Advertisement({ advertisement }: IAdvertisementProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    function handleLike(e: React.MouseEvent<HTMLDivElement>) {
        setIsLiked((prev) => !prev);
        // likeAdvertisement(1, advertisement.id);
    }

    return (
        <div className=''>
            {/* Image wrapper  */}
            <div className='w-full overflow-hidden rounded-lg'>
                <img
                    className='w-full object-center object-cover'
                    src={`${SERVER_URL}/files/${advertisement.photo}`}
                    alt={advertisement.title}
                />
            </div>

            {/* Price, title and like */}
            <div className='flex justify-between items-start'>
                <div>
                    <span className='font-bold'>{advertisement.title}</span>
                    <span>{advertisement.price}</span>
                </div>
                <div onClick={handleLike}>
                    {!isLiked && <i className='fa-light fa-heart text-red-600'></i>}
                    {isLiked && <i className='fa-solid fa-heart text-red-600'></i>}
                </div>
            </div>
        </div>
    );
}

import { useState } from 'react';
import { SERVER_URL } from '../../../shared';
import { IAdvertisementInfo, likeAdvertisement } from '../../../entities/advertisement';
import { Link } from 'react-router-dom';

interface IAdvertisementProps {
    advertisement: IAdvertisementInfo;
}

const userId: number = 1;

export function Advertisement({ advertisement }: IAdvertisementProps) {
    const [isLiked, setIsLiked] = useState<boolean>(false);

    function handleLike(e: React.MouseEvent<HTMLButtonElement>) {
        setIsLiked((prev) => !prev);
        likeAdvertisement(advertisement.id, userId);
    }

    return (
        <div className=''>
            {/* Image wrapper  */}
            <div className='w-full overflow-hidden rounded-lg border-2 border-gray-400'>
                <Link to={`/advertisements/${advertisement.id}`}>
                    <img
                        className='w-full object-center object-cover'
                        src={`${SERVER_URL}/files/advertisement/${advertisement.photo}`}
                        alt={advertisement.title}
                    />
                </Link>
            </div>

            {/* Price, title and like */}
            <div className='flex justify-between items-center px-2 mt-2'>
                <div>
                    <p className='font-bold mb-1'>{advertisement.title}</p>
                    <span>{advertisement.price}</span>
                </div>
                <button onClick={handleLike}>
                    {!isLiked && <i className='fa-regular fa-heart text-red-600 text-2xl'></i>}
                    {isLiked && <i className='fa-solid fa-heart text-red-600 text-2xl'></i>}
                </button>
            </div>
        </div>
    );
}

import { SERVER_URL } from '../../../shared';
import { IAdvertisementInfo } from '../../../entities/advertisement';
import { Link } from 'react-router-dom';

interface IAdvertisementProps {
    advertisement: IAdvertisementInfo;
}

export function Advertisement({ advertisement }: IAdvertisementProps) {
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
            <div>
                <p className='font-bold mb-1'>{advertisement.title}</p>
                <span>{advertisement.price}</span>
            </div>
        </div>
    );
}

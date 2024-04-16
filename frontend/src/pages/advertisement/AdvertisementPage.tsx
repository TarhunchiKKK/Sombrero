import { useContext, useEffect, useState } from 'react';
import {
    buyAdvertisement,
    getDefaultAdvertisement,
    getOneAdvertisement,
    IAdvertisement,
    likeAdvertisement,
} from '../../entities/advertisement';
import { SERVER_URL } from '../../shared';
import { useParams } from 'react-router-dom';
import { AuthModalContext } from '../../widgets/authModal/context/AuthModalContext';
import { useAuth } from '../../shared/hooks/useAuth';

const userId: number = 1;

export function AdvertisementPage() {
    const { advertisementId } = useParams();
    const [advertisement, setAdvertisement] = useState<IAdvertisement>(getDefaultAdvertisement());
    const { openAuthModal } = useContext(AuthModalContext);

    function handleLikeAdvertisement(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        if (useAuth()) {
            likeAdvertisement(userId, advertisement.id);
        } else {
            openAuthModal();
        }
    }

    function handleBuyAdvertisement(e: React.MouseEvent<HTMLButtonElement>) {
        e.stopPropagation();
        if (useAuth()) {
            buyAdvertisement(advertisement.id, userId);
        }
    }

    useEffect(() => {
        async function fetchAdvertisement() {
            const data: IAdvertisement = await getOneAdvertisement(+advertisementId!);
            setAdvertisement(data);
        }
        console.log('Render');
        fetchAdvertisement();
    }, []);

    return (
        <section id='advertisement' className='py-8'>
            <div className='container mx-auto'>
                <h2 className='font-bold text-xl mt-8'>{advertisement.title}</h2>
                <span>{advertisement.price}</span>

                {/* Buttons */}
                <div className='flex flex-row items-center gap-5 mt-2'>
                    <button
                        onClick={handleLikeAdvertisement}
                        className='main-gradient px-4 py-2 rounded-lg dark:text-white'>
                        В избранное
                    </button>
                    <button
                        onClick={handleBuyAdvertisement}
                        className='main-gradient px-4 py-2 rounded-lg dark:text-white'>
                        Купить
                    </button>
                </div>

                {/* Image and vendor */}
                <div className='flex sm:gap-8 flex-col sm:flex-row justify-between items-center sm:items-start mt-4'>
                    <div className=''>
                        <img
                            className='w-full h-full object-center object-cover'
                            src={`${SERVER_URL}/files/advertisement/${advertisement.photo}`}
                            alt={advertisement.title}
                        />
                    </div>

                    {/* Advertisement vendor data */}
                    <div className='flex flex-col justify-between items-end'>
                        <div className='bg-gray-300 rounded-xl py-6 px-4 min-w-[320px]'>
                            <h3 className='text-center text-xl mb-2'>Продавец</h3>
                            <p>{`${advertisement.vendor.name} ${advertisement.vendor.surname}`}</p>

                            {/* Contact info and avatar */}
                            <div className='flex flex-row justify-between items-center'>
                                <div className='flex flex-col items-start'>
                                    <span>{advertisement.vendor.email}</span>
                                    <span>{advertisement.vendor.phoneNumber}</span>
                                </div>
                                <div className='rounded-full overflow-hidden w-14 h-14'>
                                    <img
                                        className='w-full h-full object-cover object-center'
                                        src={`${SERVER_URL}/files/account/${advertisement.vendor.photo}`}
                                        alt={advertisement.vendor.name}
                                    />
                                </div>
                            </div>

                            {/* Vendor address */}
                            <div className='flex flex-col items-start mt-4'>
                                <span>Адрес:</span>
                                <span>{advertisement.vendor.address.country}</span>
                                <span>{advertisement.vendor.address.city}</span>
                                {advertisement.vendor.address.street && (
                                    <span>ул. {advertisement.vendor.address.street}</span>
                                )}
                                {advertisement.vendor.address.houseNumber && (
                                    <span>д. {advertisement.vendor.address.houseNumber}</span>
                                )}
                                {advertisement.vendor.address.flatNumber && (
                                    <span>кв. {advertisement.vendor.address.flatNumber}</span>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Advertisement description */}
                <div className='mt-6'>
                    <p className='indent-1 text-lg'>{advertisement.description}</p>
                </div>
            </div>
        </section>
    );
}

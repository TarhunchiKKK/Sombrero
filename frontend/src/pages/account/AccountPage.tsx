import { useEffect, useState } from 'react';
import { getDefaultUser, getUser, IUser, setCurrentUser } from '../../entities/user';
import { AccountInfo, AdvertisementsList } from '../../widgets/account';
import { useDispatch } from 'react-redux';

const userId: number = 1;

export function AccountPage() {
    const [user, setUser] = useState<IUser>(getDefaultUser());
    const dispatch = useDispatch();

    useEffect(() => {
        async function fetchUser() {
            const data: IUser = await getUser(userId);
            setUser(data);
            dispatch(setCurrentUser(data));
        }
        fetchUser();
    }, []);

    return (
        <section id='account' className='pt-8'>
            <div className='container mx-auto px-2 sm:px-0'>
                <div className='flex flex-col sm:flex-row justify-between items-center sm:items-start'>
                    {/* Personal info */}
                    <AccountInfo user={user} />

                    {/* Sales list, wish list and purchases list */}
                    <div className='flex flex-col gap-10 flex-grow'>
                        <AdvertisementsList title='Your sales' advertisements={user.salesList} />
                        <AdvertisementsList title='Your wishes' advertisements={user.wishList} />
                        <AdvertisementsList title='Your purchases' advertisements={user.purchasesList} />
                    </div>
                </div>
            </div>
        </section>
    );
}

import { useNavigate } from 'react-router-dom';
import { IUser } from '../../../entities/user';
import { SERVER_URL } from '../../../shared';
import { useDispatch } from 'react-redux';
import { removeTokenFromLocalStorage } from '../../authModal/helpers/localStorage';

interface IAccountInfoProps {
    user: IUser;
}

export function AccountInfo({ user }: IAccountInfoProps) {
    const navigate = useNavigate();

    function handleEditButtonClick(_: React.MouseEvent<HTMLButtonElement>) {
        navigate('./edit');
    }

    function handleLogout(_: React.MouseEvent<HTMLButtonElement>) {
        removeTokenFromLocalStorage();
        navigate('/advertisements');
    }

    return (
        <div className='flex flex-col items-start gap-2 min-w-[25%] py-4 px-8'>
            {/* Avatar, name and surname and edit button */}
            <div className='flex flex-row justify-between items-center mb-2 w-5/6'>
                {/* Avatar */}
                <div className='rounded-full w-12 h-12 overflow-hidden'>
                    <img src={`${SERVER_URL}/files/account/${user.photo}`} alt={user.name} />
                </div>

                {/* name and surname */}
                <div className='flex flex-col gap-1 items-start'>
                    <span>{user.name}</span>
                    <span>{user.surname}</span>
                </div>

                {/* Edit button */}
                <button
                    className='rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-200'
                    onClick={handleEditButtonClick}>
                    <i className='fa-solid fa-pen'></i>
                </button>
            </div>

            <div className='flex flex-col gap-2 items-start mt-4'>
                <span>{user.phoneNumber}</span>
                <span>{user.email}</span>

                <div className='flex flex-col gap-2 items-start mt-4'>
                    <span>Адрес:</span>
                    <span>{user.address.country}</span>
                    <span>{user.address.city}</span>
                    {user.address.street && <span>ул. {user.address.street}</span>}
                    {user.address.houseNumber && <span>д. {user.address.houseNumber}</span>}
                    {user.address.flatNumber && <span>кв. {user.address.flatNumber}</span>}
                </div>
            </div>

            <button className='main-gradient px-4 py-2 dark:text-white rounded-md' onClick={handleLogout}>
                Logout
            </button>
        </div>
    );
}

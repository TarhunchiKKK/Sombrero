import { formToJSON } from 'axios';
import { useRef, useState } from 'react';
import { Form, useNavigate } from 'react-router-dom';
import { IUpdateUserDto, IUser, IUserInfo, updateUser } from '../../entities/user';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store/store';

const inputStyle: string = 'w-full h-10 px-4 bg-gray-300 border-none outline-none outline rounded-lg';

interface IAccountEditPageProps {
    user: IUser;
}

export function AccountEditPage() {
    const user: IUserInfo = useSelector((state: RootState) => state.user.currentUser);
    const navigate = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);

    function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const form: HTMLFormElement = formRef.current!;
        const formData: FormData = new FormData(form);

        const data: IUpdateUserDto = {
            name: formData.get('name') as string,
            surname: formData.get('surname') as string,
            phoneNumber: formData.get('phone') as string,
            photo: formData.get('photo') as string,
            address: {
                country: formData.get('country') as string,
                city: formData.get('city') as string,
                street: formData.get('street') as string,
                houseNumber: formData.get('house') as string,
                flatNumber: formData.get('flat') as string,
            },
        };

        updateUser(user.id, data);
    }

    function handleGoBack(e: React.MouseEvent<HTMLButtonElement>) {
        navigate('/account');
    }

    return (
        <>
            <section id='account-edit' className='pt-20 relative'>
                <div className='container mx-auto px-4 sm:px-0'>
                    <div className='mx-auto w-3/5'>
                        <h2 className='text-center font-bold text-2xl mb-14'>Редактирование данных</h2>

                        {/* Form */}
                        <form ref={formRef} onSubmit={handleSubmit}>
                            <div className='px-4 py-6 flex flex-col sm:flex-row justify-between gap-4 sm:gap-14 items-start sm:items-start'>
                                <div className='flex-grow flex flex-col items-start gap-4'>
                                    <input
                                        className={inputStyle}
                                        type='text'
                                        defaultValue={user.name}
                                        name='name'
                                        placeholder='Name...'
                                    />
                                    <input
                                        className={inputStyle}
                                        type='text'
                                        defaultValue={user.surname}
                                        name='surname'
                                        placeholder='Surname...'
                                    />
                                    <input
                                        className={inputStyle}
                                        type='text'
                                        defaultValue={user.phoneNumber}
                                        name='phone'
                                        placeholder='Phone...'
                                    />
                                </div>

                                <div className='flex-grow flex flex-col items-start gap-4'>
                                    <input
                                        className={inputStyle}
                                        type='text'
                                        defaultValue={user.address.country}
                                        name='country'
                                        placeholder='Country...'
                                    />
                                    <input
                                        type='text'
                                        className={inputStyle}
                                        defaultValue={user.address.city}
                                        name='city'
                                        placeholder='City...'
                                    />
                                    <input
                                        className={inputStyle}
                                        type='text'
                                        defaultValue={user.address.street ?? ''}
                                        name='street'
                                        placeholder='Street...'
                                    />
                                    <input
                                        className={inputStyle}
                                        type='number'
                                        defaultValue={user.address.houseNumber}
                                        name='house'
                                        placeholder='Home number...'
                                    />
                                    <input
                                        className={inputStyle}
                                        type='number'
                                        defaultValue={user.address.flatNumber}
                                        name='flat'
                                        placeholder='Flat number...'
                                    />
                                </div>
                            </div>
                            <button
                                className='mx-auto block dark:text-white rounded-lg main-gradient py-2 px-4 mt-4'
                                type='submit'>
                                Редактировать
                            </button>
                        </form>
                    </div>
                </div>
                <button
                    className='absolute left-4 top-4 rounded-full flex justify-center items-center w-10 h-10 hover:bg-gray-200'
                    onClick={handleGoBack}>
                    <i className='fa-solid fa-arrow-left text-2xl'></i>
                </button>
            </section>
        </>
    );
}

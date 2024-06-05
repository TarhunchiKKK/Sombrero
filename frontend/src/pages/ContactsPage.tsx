import { useGetContactsQuery } from '../entities/contact';
import { SERVER_URL } from '../shared';
import { Contact } from '../widgets/contact';

export function ContactsPage() {
    const { data: contacts } = useGetContactsQuery();

    return (
        <section className='pt-[82px] pb-14'>
            <div className='container mx-auto px-2 sm:px-0'>
                <h2 className='section-title'>Связаться с нами</h2>

                {/* Contacts */}
                <div className='flex flex-col'>
                    {contacts?.map((contact) => (
                        <Contact
                            key={contact.id}
                            contact={{ ...contact, photo: `${SERVER_URL}/files/${contact.photo}` }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
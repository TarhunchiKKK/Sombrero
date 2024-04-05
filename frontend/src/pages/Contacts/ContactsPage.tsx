import { Contact } from '../../widgets/Contact'
import { contacts } from './consts/Contacts'

export function ContactsPage() {
    return (
        <section className='pt-[82px] pb-14'>
            <div className='container mx-auto px-2 sm:px-0'>
                <h2 className='section-title'>Связаться с нами</h2>

                {/* Contacts */}
                <div className='flex flex-col'>
                    {contacts.map((contact, idx) => (
                        <Contact contact={contact} key={idx} />
                    ))}
                </div>
            </div>
        </section>
    )
}

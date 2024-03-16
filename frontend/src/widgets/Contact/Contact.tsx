import { IContact } from './types/IContact'

interface ContactProps {
    contact: IContact
}

export default function Contact({ contact }: ContactProps) {
    return (
        <div className='contact group'>
            {/* Image and info */}
            <div className='w-[300px] flex flex-col md:flex-row md:group-even:flex-row-reverse justify-between items-center'>
                {/* Image */}
                <div className='w-[90px] h-[90px] rounded-full overflow-hidden'>
                    <img
                        className='w-full h-full'
                        src={contact.image}
                        alt={contact.name}
                    />
                </div>

                {/* Name and job */}
                <div className='mt-4 md:mt-0 text-center md:text-left'>
                    <h4 className='text-2xl sm:text-3xl text-center md:text-left'>
                        {contact.name}
                    </h4>
                    <span className='text-lg sm:text-xl'>{contact.job}</span>
                </div>
            </div>

            {/* Description */}
            <div className='w-5/6 sm:w-1/2 mt-4 sm:mt-0 text-center sm:text-left'>
                <p className='text-sm'>{contact.description}</p>
            </div>
        </div>
    )
}

import { Accordeon } from '../../widgets/Accordeon'
import { AccordeonItems } from './consts/FaqQuestions'

export function FaqPage() {
    return (
        <section id='faq' className='pt-20 pb-14'>
            <div className='container mx-auto px-4 sm:px-0'>
                <h2 className='text-center uppercase text-3xl mb-9'>Faq</h2>

                <Accordeon getItems={() => AccordeonItems} />
            </div>
        </section>
    )
}

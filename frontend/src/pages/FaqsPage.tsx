import { Accordeon } from '../widgets/accordeon';
import { useGetFaqsQuery } from '../entities/faqs';
import { PageTitle } from '../shared';

export function FaqsPage() {
    const { data: faqs } = useGetFaqsQuery();

    return (
        <section id='faq' className='pt-20 pb-14'>
            <div className='container mx-auto px-4 sm:px-0'>
                <PageTitle title='FAQs' />

                {/* Accordeon with frequently asked questions */}
                {faqs && <Accordeon items={faqs} />}
            </div>
        </section>
    );
}

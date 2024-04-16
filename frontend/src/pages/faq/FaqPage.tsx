import { useEffect, useState } from 'react';
import { getFaqs, IFaq } from '../../entities/questions';
import { Accordeon } from '../../widgets/accordeon';

export function FaqPage() {
    const [questions, setQuestions] = useState<IFaq[]>([]);

    useEffect(() => {
        async function fetchFaqs() {
            const data = await getFaqs();
            setQuestions(data);
        }
        fetchFaqs();
    }, []);

    return (
        <section id='faq' className='pt-20 pb-14'>
            <div className='container mx-auto px-4 sm:px-0'>
                <h2 className='section-title'>Faq</h2>

                {/* Accordeon with frequently asked questions */}
                <Accordeon items={questions} />
            </div>
        </section>
    );
}

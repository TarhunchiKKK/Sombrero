import { useEffect, useState } from 'react';
import { Search } from '../../shared';
import { HelpQuestions } from '../../widgets/help-questions';
import { getHelpQuestions, IHelpQuestionsCategory, useGetHelpQuery } from '../../entities/help';

export function HelpPage() {
    const [searchedQuestion, setSearchedQuestion] = useState<string>('');
    // const [questionsGroups, setQustionsGroups] = useState<IHelpQuestionsCategory[]>([]);

    // useEffect(() => {
    //     async function fetchHelpQuestions() {
    //         const data: IHelpQuestionsCategory[] = await getHelpQuestions();
    //         setQustionsGroups(data);
    //     }

    //     fetchHelpQuestions();
    // }, []);

    const { data: questionsGroups } = useGetHelpQuery();

    return (
        <section className='pt-[100px] pb-[94px]'>
            <div className='container mx-auto'>
                <h2 className='section-title'>Поиск по вопросам</h2>

                {/* Search form */}
                <Search
                    className='mx-auto mb-10 sm:mb-20 lg:mb-[167px]'
                    placeholder='В чём проблема?'
                    onChange={(e) => setSearchedQuestion(e.target.value)}
                />

                {/* Help questions */}
                {questionsGroups && (
                    <HelpQuestions searchedQuestion={searchedQuestion} questionsGroups={questionsGroups} />
                )}
            </div>
        </section>
    );
}

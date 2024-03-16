import { useState } from 'react'
import Search from '../../shared/components/Search'
import { HelpQuestionsCategories } from './consts/HelpQuestions'
import HelpQuestions from '../../widgets/HelpQuestions/HelpQuestions'

export default function HelpPage() {
    const [searchedQuestion, setSearchedQuestion] = useState<string>('')

    return (
        <section className='pt-[100px] pb-[94px]'>
            <div className='container mx-auto'>
                <h2 className='text-center text-xl sm:text-3xl mb-11'>
                    Поиск по вопросам
                </h2>

                {/* Search form */}
                <Search
                    className='mx-auto mb-10 sm:mb-20 lg:mb-[167px]'
                    placeholder='В чём проблема?'
                    onChange={(e) => setSearchedQuestion(e.target.value)}
                />

                {/* Help questions */}
                <HelpQuestions
                    searchedQuestion={searchedQuestion}
                    getQuestions={() => HelpQuestionsCategories}
                />
            </div>
        </section>
    )
}

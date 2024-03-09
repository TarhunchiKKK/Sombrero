import { useState } from 'react'
import Search from '../components/Search'
import { HelpQuestionsCategories } from '../data/help'
import HelpQuestionsCategory from '../components/HelpQuestionsCategory'

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
                <div className='mx-auto grid grid-cols-1 gap-y-6 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
                    {HelpQuestionsCategories.map((category, idx) => (
                        <HelpQuestionsCategory
                            {...category}
                            searchedQuestion={searchedQuestion.toLowerCase()}
                            key={idx}
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

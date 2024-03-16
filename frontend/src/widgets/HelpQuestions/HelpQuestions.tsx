import { useMemo } from 'react'
import HelpQuestionsCategory from './components/HelpQuestionsCategory'
import { IHelpQuestionsGroup } from './types/IHelpQuestionsCategory'

interface HelpQuestionsProps {
    searchedQuestion: string
    getQuestions: () => IHelpQuestionsGroup[]
}

export function HelpQuestions({
    searchedQuestion,
    getQuestions,
}: HelpQuestionsProps) {
    const questionGroups: IHelpQuestionsGroup[] = useMemo(
        () => getQuestions(),
        [],
    )

    return (
        <div className='mx-auto grid grid-cols-1 gap-y-6 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
            {questionGroups.map((category, idx) => (
                <HelpQuestionsCategory
                    {...category}
                    searchedQuestion={searchedQuestion.toLowerCase()}
                    key={idx}
                />
            ))}
        </div>
    )
}

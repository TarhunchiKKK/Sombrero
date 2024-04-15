import HelpQuestionsCategory from './HelpQuestionsCategory'
import {
    getHelpQuestions,
    IHelpQuestionsCategory,
} from '../../../entities/questions'

interface HelpQuestionsProps {
    searchedQuestion: string
}

const questionsGroups: IHelpQuestionsCategory[] = await getHelpQuestions()

export function HelpQuestions({ searchedQuestion }: HelpQuestionsProps) {
    return (
        <div className='mx-auto grid grid-cols-1 gap-y-6 sm:gap-y-16 sm:grid-cols-2 lg:grid-cols-3'>
            {questionsGroups.map((category, idx) => (
                <HelpQuestionsCategory
                    {...category}
                    searchedQuestion={searchedQuestion.toLowerCase()}
                    key={idx}
                />
            ))}
        </div>
    )
}

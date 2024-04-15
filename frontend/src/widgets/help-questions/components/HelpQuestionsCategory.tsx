import { IHelpQuestion } from '../../../entities/questions'

interface HelpQuestionsGroupProps {
    title: string
    questions: IHelpQuestion[]
    searchedQuestion: string
}

export default function HelpQuestionsGroup(props: HelpQuestionsGroupProps) {
    return (
        <div className='mx-auto'>
            <h3 className='font-bold'>{props.title}</h3>
            {props.questions
                .filter((question) =>
                    question.title
                        .toLowerCase()
                        .includes(props.searchedQuestion),
                )
                .map((question, idx) => (
                    <a className='text-link block mt-4' key={idx}>
                        {question.title}
                    </a>
                ))}
        </div>
    )
}

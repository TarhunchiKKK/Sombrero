import { IHelpQuestion } from '../../../entities/questions';

interface HelpQuestionsGroupProps {
    title: string;
    questions: IHelpQuestion[];
    searchedQuestion: string;
}

export default function HelpQuestionsGroup(props: HelpQuestionsGroupProps) {
    const questions: IHelpQuestion[] = props.questions.filter((question) =>
        question.title.toLowerCase().includes(props.searchedQuestion),
    );

    return (
        <>
            {questions.length !== 0 && (
                <div className='mx-auto'>
                    <h3 className='font-bold'>{props.title}</h3>
                    {questions.map((question, idx) => (
                        <a className='text-link block mt-4' key={idx}>
                            {question.title}
                        </a>
                    ))}
                </div>
            )}
        </>
    );
}

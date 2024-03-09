interface HelpQuestionsCategoryProps {
    title: string
    questions: string[]
    searchedQuestion: string
}

export default function HelpQuestionsCategory(
    props: HelpQuestionsCategoryProps,
) {
    return (
        <div className='mx-auto'>
            <h3 className='font-bold'>{props.title}</h3>
            {props.questions
                .filter((question) =>
                    question.toLowerCase().includes(props.searchedQuestion),
                )
                .map((question, idx) => (
                    <a className='text-link block mt-4' key={idx}>
                        {question}
                    </a>
                ))}
        </div>
    )
}

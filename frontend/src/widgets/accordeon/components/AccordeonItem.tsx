import { IFaq } from '../../../entities/faqs';

export interface AccordeonItemProps {
    item: IFaq;
    isOpen: boolean;
    onClick: () => void;
}

export function AccordeonItem({ item, isOpen, onClick }: AccordeonItemProps) {
    const questionStyle: string = isOpen
        ? 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2 main-gradient'
        : 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2';

    const answerStyle: string = isOpen
        ? 'bg-gray-200 border-[#BEC2C6] border-2 border-t-0 px-4 py-1 block '
        : 'bg-gray-200 border-[#BEC2C6] border-2 border-t-0 px-4 py-1 hidden ';

    const angleStyle: string = isOpen ? 'rotate-180 fa-solid fa-angle-up' : '-rotate-90 fa-solid fa-angle-up';

    return (
        <div className='-mt-[2px] first:mt-0'>
            <div onClick={onClick} className={questionStyle}>
                <span className='text-3xl'>{item.question}</span>
                <i className={angleStyle}></i>
            </div>

            <div className={answerStyle}>
                <p className='text-xl'>{item.answer}</p>
            </div>
        </div>
    );
}

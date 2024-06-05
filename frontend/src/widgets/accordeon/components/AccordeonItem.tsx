import { IFaq } from '../../../entities/faqs';
import { FaAngleLeft } from 'react-icons/fa6';

export interface AccordeonItemProps {
    item: IFaq;
    isOpen: boolean;
    onClick: () => void;
}

export function AccordeonItem({ item, isOpen, onClick }: AccordeonItemProps) {
    const questionClass: string = isOpen
        ? 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2 main-gradient'
        : 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2';

    const answerClass: string = isOpen ? 'border-[#BEC2C6] border-2 border-t-0 px-4 py-1' : '';

    const answerStyle = {
        backgroundColor: 'rgb(229 231 235)',
        overflow: 'hidden',
        transition: 'max-height 0.2s ease-out',
        maxHeight: isOpen ? undefined : '0px',
    };

    return (
        <div className='-mt-[2px] first:mt-0'>
            <div onClick={onClick} className={questionClass}>
                <span className='text-3xl'>{item.question}</span>
                <FaAngleLeft
                    style={{ width: '24px', height: '24px', transitionDuration: '600ms' }}
                    className={isOpen ? '-rotate-90' : ''}
                />
            </div>

            <div style={answerStyle} className={answerClass}>
                <p className='text-xl'>{item.answer}</p>
            </div>
        </div>
    );
}

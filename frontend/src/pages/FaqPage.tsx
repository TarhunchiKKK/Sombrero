import { memo, useCallback, useMemo, useState } from 'react'
import AccodreonItem, { AccordeonItems } from '../data/faq'

interface AccordeonItemProps {
    item: AccodreonItem
    isOpen: boolean
    onClick: () => void
}

function AccordeonItem({ item, isOpen, onClick }: AccordeonItemProps) {
    const questionStyle: string = isOpen
        ? 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2 main-gradient'
        : 'cursor-pointer h-14 px-4 py-1 flex justify-between items-center border-[#BEC2C6] border-2'

    const answerStyle: string = isOpen
        ? 'bg-gray-200 border-[#BEC2C6] border-2 px-4 py-1'
        : 'bg-gray-200 border-[#BEC2C6] border-2 px-4 py-1 hidden'

    const angleStyle: string = isOpen
        ? 'rotate-180 fa-solid fa-angle-up'
        : '-rotate-90 fa-solid fa-angle-up'

    return (
        <div>
            <div onClick={onClick} className={questionStyle}>
                <span className='text-3xl'>{item.question}</span>
                <i className={angleStyle}></i>
            </div>

            <div className={answerStyle}>
                <p className='text-xl'>{item.answer}</p>
            </div>
        </div>
    )
}

export default function FaqPage() {
    const items = useMemo(() => AccordeonItems, [])
    const [currentItem, setCurrentItem] = useState<number>(-1)

    const itemClickHandler = (item: number) => {
        if (item === currentItem) {
            setCurrentItem(-1)
        } else {
            setCurrentItem(item)
        }
    }

    return (
        <section id='faq' className='pt-20 pb-14'>
            <div className='container mx-auto px-4 sm:px-0'>
                <h2 className='text-center uppercase text-3xl mb-9'>Faq</h2>

                <div id='accordeon'>
                    {items.map((item) => (
                        <AccordeonItem
                            item={item}
                            isOpen={currentItem === item.id}
                            onClick={() => itemClickHandler(item.id)}
                            key={item.id}></AccordeonItem>
                    ))}
                </div>
            </div>
        </section>
    )
}

import { useState } from 'react'
import { AccordeonItem } from './AccordeonItem'
import { getFaqs, IFaq } from '../../../entities/questions'

// const items: (IFaq & { id: number })[] = (await getFaqs()).map((faq, idx) => {
//     return { ...faq, id: idx }
// })

interface Props {
    items: IFaq[]
}

export function Accordeon({ items }: Props) {
    const [currentItem, setCurrentItem] = useState<number>(-1)

    const itemClickHandler = (item: number) => {
        if (item === currentItem) {
            setCurrentItem(-1)
        } else {
            setCurrentItem(item)
        }
    }

    console.log(items)

    return (
        <div id='accordeon'>
            {items.map((item, idx) => (
                <AccordeonItem
                    item={item}
                    isOpen={currentItem === idx}
                    onClick={() => itemClickHandler(idx)}
                    key={idx}></AccordeonItem>
            ))}
        </div>
    )
}

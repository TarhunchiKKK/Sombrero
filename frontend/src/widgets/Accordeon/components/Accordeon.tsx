import { useState } from 'react'
import { AccordeonItem } from './AccordeonItem'
import { getFaqs, IFaq } from '../../../entities/questions'

const items: (IFaq & { id: number })[] = (await getFaqs()).map((faq, idx) => {
    return { ...faq, id: idx }
})

export function Accordeon() {
    const [currentItem, setCurrentItem] = useState<number>(-1)

    const itemClickHandler = (item: number) => {
        if (item === currentItem) {
            setCurrentItem(-1)
        } else {
            setCurrentItem(item)
        }
    }

    return (
        <div id='accordeon'>
            {items.map((item) => (
                <AccordeonItem
                    item={item}
                    isOpen={currentItem === item.id}
                    onClick={() => itemClickHandler(item.id)}
                    key={item.id}></AccordeonItem>
            ))}
        </div>
    )
}

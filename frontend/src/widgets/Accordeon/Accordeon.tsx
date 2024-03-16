import { useMemo, useState } from 'react'
import { AccordeonItem } from './components/AccordeonItem'
import { IAccodreonItem } from './types/IAccordeonItem'

interface AccordeopnProps {
    getItems: () => IAccodreonItem[]
}

export function Accordeon({ getItems }: AccordeopnProps) {
    const items = useMemo(() => getItems(), [])
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

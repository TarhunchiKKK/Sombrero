import { useMemo, useState } from 'react'
import { AccordeonItems } from '../data/faq'
import AccordeonItem from '../components/AccordeonItem'

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

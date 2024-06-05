import { useState } from 'react';
import { AccordeonItem } from './components/AccordeonItem';
import { IFaq } from '../../entities/faqs';

interface Props {
    items: IFaq[];
}

export function Accordeon({ items }: Props) {
    const [currentItem, setCurrentItem] = useState<number>(-1);

    const itemClickHandler = (item: number) => {
        if (item === currentItem) {
            setCurrentItem(-1);
        } else {
            setCurrentItem(item);
        }
    };

    return (
        <div id='accordeon'>
            {items.map((item, idx) => (
                <AccordeonItem
                    item={item}
                    isOpen={currentItem === idx}
                    onClick={() => itemClickHandler(idx)}
                    key={item.id}></AccordeonItem>
            ))}
        </div>
    );
}

import React, { useState } from 'react';
import s from './sorted.module.scss';

interface PropsSordet {
    getnumSordet: (num: number) => void;
}

const Sorted = ({getnumSordet}: PropsSordet) => {
    let nameLabel: string[] = ['Все', 'Выполненные', 'Не выполненые',];
    let [check, setCheck]  = useState<number>(0);
    const changeHandler = (i: number) => {
        setCheck(i);
        getnumSordet(i);

    };

    let block = nameLabel.map((e, i: number) => {
        return (
            <div>
                <input checked={i === check? true: false} onChange={() => changeHandler(i)} type="radio" key={i} name="todo" />
                <label>{e}</label>
            </div>)
    });

    return (
        <div className={s.wraper}>
            {block}
        </div>
    );
};

export default Sorted;
import {observer} from 'mobx-react-lite';
import React, { SyntheticEvent, useState } from 'react';
import s from './addsEntry.module.scss';

interface SortProps {
    sort: (item: string) => void;
}

const AddsEntry = ({sort}: SortProps) => {
    let [text, setText] = useState<string>(' ');

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setText(event.target.value);
    }

    const clickHandler = (e: React.MouseEvent) => {
        sort(text);
        setText('');
    }

    return (
        <div className={s.wraper}>
            <input onChange={changeHandler} value={text} type="text" />
            <button onClick={clickHandler}>+</button>
            
        </div>
    );
};

export default observer(AddsEntry);
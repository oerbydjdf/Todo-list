import React, { useEffect, useState } from 'react';
import s from './todoList.module.scss';
import { observer } from 'mobx-react-lite';

interface ListProps {
    list: {
        arrTodoList: string[];
        setModifisEntry: (arr: string[]) => void;
        sortNumber: number;
    };
}

const TodoList = (props: ListProps) => {
    let [check, setCheck] = useState<number[]>([]);
    let [edit, setEdit] = useState<number>();
    let [entry, setEntry] = useState<string>(' ');

    const changeHandler = (i: number) => {
        (check.includes(i)) ? setCheck(check.filter(e => e != i)) : setCheck([...check, i]);
    }

    const handlClickDel = (i: number) => {
        let arr = props.list.arrTodoList.filter((e, index) => i != index)
        props.list.setModifisEntry(arr);
        setCheck(check.map(e => (e > i) ? e = e - 1 : e));
        setCheck(check.filter(e => e != i).map(e => (e > i) ? e = e - 1 : e));
    }

    const hadlClickEdit = (i: number, text: string) => {
        setEdit(i);
        setEntry(text);
    }

    const editsEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEntry(event.target.value);
    }

    const modifiesEntry = (index: number) => {
        setEdit(-1);
        let arr = props.list.arrTodoList.map((e, i) => (i == index) ? e = entry : e);
        props.list.setModifisEntry(arr);
    }

    const sortedList = (index: number) => {
        if(props.list.sortNumber === 0) return true;
        if(props.list.sortNumber === 1) return check.includes(index);
        if(props.list.sortNumber === 2) return!check.includes(index);
        
        
    }

    let list = props.list.arrTodoList.map((e, i: number) => {
        return (
            <div key={i} className={(sortedList(i))? s.wraper: s.wraperNone}>
                <input onChange={() => changeHandler(i)} checked={check.includes(i) ? true : false} type="checkbox" key={i} name="todo" />
                {
                    (window.matchMedia("(max-width: 500px)").matches) ?
                    <button onClick={() => handlClickDel(i)} className={s.del}></button> :
                    <button onClick={() => handlClickDel(i)} className={s.del}>Удалить</button>
                }
                {
                    (window.matchMedia("(max-width: 500px)").matches) ?
                    <button onClick={() => hadlClickEdit(i, e)} className={s.edit}></button> :
                    <button onClick={() => hadlClickEdit(i, e)} className={s.edit}>Ред-вать</button>
                }
                {(edit == i) ? <input autoFocus onBlur={() => modifiesEntry(i)} value={entry} onChange={editsEntry} type="text" /> : <label key={i} data-content={e}>{e}</label>}
            </div>
        )
    });
    return (
        <>{list}</>
    );
};

export default observer(TodoList);
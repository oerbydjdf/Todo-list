import React, { useState } from 'react';
import s from './todoList.module.scss';
import { observer } from 'mobx-react-lite';
import storeTL from '../../store/StoreTodoList';

interface ListProps {
    list: {
        arrTodoList: string[];
        setModifisEntry: (arr: string[]) => void;
        sortNumber: number;
    };
}

const TodoList = (props: ListProps) => {

    let list = props.list.arrTodoList.map((e, i: number) => {
        return (
            <div key={i} className={(storeTL.sortedList(i))? s.wraper: s.wraperNone}>
                <div style={{display: 'flex'}}>
                <input onChange={() => storeTL.changeHandler(i)} checked={storeTL.arrChecked.includes(i) ? true : false} type="checkbox" key={i} name="todo" />
                {
                    (window.matchMedia("(max-width: 500px)").matches) ?
                    <button onClick={() => storeTL.handlClickDel(i)} className={s.del}></button> :
                    <button onClick={() => storeTL.handlClickDel(i)} className={s.del}>Удалить</button>
                }
                {
                    (window.matchMedia("(max-width: 500px)").matches) ?
                    <button onClick={() => storeTL.hadlClickEdit(i, e)} className={s.edit}></button> :
                    <button onClick={() => storeTL.hadlClickEdit(i, e)} className={s.edit}>Ред-вать</button>
                }
                </div>
                {
                    (storeTL.indexEdit == i) ?
                    <>
                    <label style={{visibility:'hidden'}} key={i} data-content={e}>{e}</label>
                    <input className={s.inputEdit} autoFocus onBlur={() => storeTL.modifiesEntry(i)} value={storeTL.textEntry} onChange={ storeTL.editsEntry} type="text" />
                    </>
                    :
                    <label key={i} data-content={e}>{e}</label>
                }
            </div>
        )
    });
    return (
        <>{list}</>
    );
};

export default observer(TodoList);
import { makeAutoObservable } from "mobx";
import store from '../store/Storet';

class StoreTodoList {

    arrChecked: number[] = [];
    indexEdit:number | undefined;
    textEntry:string = '';

    constructor() {
        makeAutoObservable(this);
    }

    changeHandler = (i: number) => {
        this.arrChecked = (this.arrChecked.includes(i)) ? this.arrChecked.filter(e => e != i) : [...this.arrChecked, i]
    }


    handlClickDel = (i: number) => {
        let arr = store.arrTodoList.filter((e, index) => i != index)
        store.setModifisEntry(arr);
        this.arrChecked = this.arrChecked.filter(e => e != i).map(e => (e > i) ? e = e - 1 : e);
    }

    hadlClickEdit = (i: number, text: string) => {
        this.indexEdit = i;
        this.textEntry = text;
    }

    editsEntry = (event: React.ChangeEvent<HTMLInputElement>) => {
        this.textEntry = event.target.value;
    }

    modifiesEntry = (index: number) => {
        this.indexEdit = -1;
        let arr = store.arrTodoList.map((e, i) => (i == index) ? e = this.textEntry : e);
        store.setModifisEntry(arr);
    }

    sortedList = (index: number) => {
        if(store.sortNumber === 0) return true;
        if(store.sortNumber === 1) return this.arrChecked.includes(index);
        if(store.sortNumber === 2) return!this.arrChecked.includes(index);
        
        
    }


}

export default new StoreTodoList();
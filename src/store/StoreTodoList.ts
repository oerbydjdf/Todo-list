import { makeAutoObservable } from "mobx";

class StoreTodoList {
    arrTodoList: string[] = [];
    sortNumber: number = 0;

    constructor() {
        makeAutoObservable(this);
    }

    setTodoList = (item: string) => this.arrTodoList.push(item);
    setModifisEntry = (arr: string[]) => this.arrTodoList = arr;
    getSortedNum = (num: number) => this.sortNumber = num;


}

export default new StoreTodoList();
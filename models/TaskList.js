import {Task} from "./Task";

class TaskList{

    constructor(name) {
        this.name = name;
        this.array = [];
    }

    setName(name){
        this.name= name;
    }
    getName(){
        return name;
    }
    getList(){
        return array;
    }

}

export {TaskList}
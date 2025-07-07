import {Task} from "./Task.js";

class TaskList{
    #name
    constructor(name) {
        this.#name = name;
        this.taskArray = []
        this.taskArray.push(new Task("Dish washing"));
    }

    setName(name){
        this.#name= name;
    }
    getName(){
        return this.#name;
    }
    getList(){
        return this.taskArray;
    }

    addNormalTask(task){
        this.taskArray.push(task);
    }

    addUrgentTask(task){
        this.taskArray.unshift(task);
    }

    removeTask(task){
        let x=this.taskArray.indexOf(task);
        if(x !== null){
            return (this.taskArray.splice(x,1) + " has now been deleted");
        }
        return task.getName() + " doesnt exist.";
    }

    updateTask(){
        return "updating"
    }
    getAllTask(){
        try{
            for(const task of this.taskArray){
                console.log(task.getName());
            }
        }catch (e) {
            console.log("HEll")
        }

    }

}

export {TaskList}
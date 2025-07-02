import {Priority} from "./Priority";
import {TaskList} from "../models/TaskList"

class Command{
    #name;
    #description
    #features
    #priority

    constructor(name, description, priority) {
        this.#name = name;
        this.#description=description;
        this.#priority = new Priority(priority);
        this.#features = [];
    }

    execute (taskList, command){

    }
    getPriority(){
        return this.#priority;
    }
}
export {Command}
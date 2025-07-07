import {Priority} from "./Priority";

class Command{
    #priority
    constructor(priority = new Priority()) {
        this.#priority = priority;
    }
    execute(taskList, command, task) {

    }

    getPriority(){
        return this.#priority;
    }
}
export {Command}
import {Command} from "./Command";
import {Priority} from "./Priority.js";

class DeleteCommand extends Command{
    constructor(priority) {
        super(new Priority(priority));

    }
    execute(taskList, task) {
        if(taskList.contains(task)){
            taskList.removeTask(task)
            return task.getName() + " has now been deleted";
        }
        return task.getName() + " doesnt exist in these tasks"
    }
}
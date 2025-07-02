import {Command} from "./Command";
import {TaskList} from "../models/TaskList";

class AddCommand extends Command{
    constructor(name, description, priority='u') {
        super(name, description, priority);

    }

    execute(taskList, command) {
        if(command.getPriority())

    }
}
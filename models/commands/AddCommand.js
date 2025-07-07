import {Command} from "./Command";
import {Priority} from "./Priority.js";

class AddCommand extends Command{
    constructor(priority) {
        super(new Priority(priority));

    }
    execute(taskList, command, task) {
        if (this.getPriority() === new Priority('u')) {
          taskList.addUrgentTask(task);

        } else {
          taskList.addNormalTask(task);
        }
      }
}
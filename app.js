import {Task} from "./models/Task.js";
import {timeRemining} from "./services/Timer.js";
import {TaskList} from "./models/TaskList.js";

const dinner = new Task("Dinner", 4);
dinner.setDdescription("Making pounded yam and egusi for dinner");

const midnight = new Task("Working midnight", 4);
dinner.setDdescription("Making fake money");

const taskList = new TaskList("chores")
taskList.addUrgentTask(midnight);
taskList.addUrgentTask(midnight);
taskList.addNormalTask(dinner);
taskList.getAllTask();

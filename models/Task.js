
class Task{
    #name;
    #description;
    #timeToCompleteTask;
    #status;
    #starteDate;
    #finishDate


    constructor(name, timeToCompleteTask = 2) {
        this.#name = name;
        this.#description="";
        this.#timeToCompleteTask = timeToCompleteTask;
        this.#status = "INCOMPLETE";
        this.#starteDate = new Date();
        this.#finishDate = new Date()
        this.#finishDate.setHours(this.#starteDate.getHours()+timeToCompleteTask);
    }
    setName(name){
        this.name = name;
        console.log(name);
    }

    setDdescription(description){
        this.#description = description;
    }

    setTimeToCompleteTask(num){
        this.timeToCompleteTask = num;
    }
    setStatus(condition){
        if(condition){
            this.#status = "COMPLETE"
        }else{
            if(Date.now() < this.#finishDate) this.#status="INCOMPLETE"
            else this.#status="FAILED"
        }
    }

    getName(){
        return this.#name;
    }

    getDescription(){
        return this.#description;
    }

    getFinishDate(){
        return this.#finishDate;
    }

    getTimeToCompleteTask(){
        return this.#timeToCompleteTask;
    }

    getStatus(){
        return this.#status;
    }
}
function callHours(timeToCompleteTask) {
    return (timeToCompleteTask*1000*60*60);
}

export {Task, callHours}
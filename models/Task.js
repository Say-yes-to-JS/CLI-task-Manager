class Task{
    #name;
    #description;
    #timeToCompleteTask;
    #status;
    #starteDate;
    #finishDate

    constructor(name) {
        this.#name = name;
        this.#description="";
        this.#timeToCompleteTask = 2;
        this.#status = false;
        this.#starteDate = new Date();
        this.#finishDate = new Date();
    }

    setName(name){
        this.name = name;
        console.log(name);
    }

    setDdescription(description){
        this.description = description;
        console.log(description);
    }

    setTimeToCompleteTask(num){
        this.timeToCompleteTask = num;
        console.log(num);
    }
    setStatus(){
        this.#status = !this.#status;
    }

    getName(){
        return this.#name;
    }

    getDescription(){
        return this.#description;
    }

    getTimeToCompleteTask(){
        return this.#timeToCompleteTask;
    }

    getStatus(){
        return this.#status;
    }
}

export {Task}
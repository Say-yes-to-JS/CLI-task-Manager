class Priority{
    #priority

    constructor(priority = 'n') {
        if(priority === 'u')
            this.#priority = this.u;
        else this.#priority = this.n;
    }

    n = "NORMAL";
    u = "URGENT";
}

export {Priority}
import * as readline from "node:readline";

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function prompt(question){
    return new Promise((resolve) => {
        r1.question(question, (answer) =>{
            resolve(answer)
        });
    });
}

function close(){
    r1.close();
}


export{prompt, close}
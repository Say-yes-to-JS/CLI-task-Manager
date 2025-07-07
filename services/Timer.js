function timeRemining(date){
    let now = new Date();
    let difference = date - now;

    console.log(`${now} = now`);
    console.log(Math.round(difference/(1000*60*60)));

    let remainingDifference = Math.round(difference/(1000*60));
    let remainingHr = Math.floor(remainingDifference/60);
    let remainingMins = (remainingDifference-remainingHr*60);
    return ("You have "+ remainingHr +" hours left and you have "+ remainingMins +" mins left");
}
function increaseDateByHr(date, hr){
    return date+(hr*1000*3600);

}
export {timeRemining, increaseDateByHr}




function timeRemining(date){
    let now = new Date();
    let difference = date - now;

    let remainingDifference = Math.round(difference/(1000*60));
    let remainingHr = Math.floor(remainingDifference/60);
    let remainingMins = (remainingDifference-remainingHr*60);
    return ("You have "+ remainingHr +" hours left and you have "+ remainingMins +" mins left");
}
function increaseDateByHr(date, hr){
    date=date+(hr*1000*3600);
    return date;
}
export {timeRemining, increaseDateByHr}




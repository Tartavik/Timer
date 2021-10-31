const date = new Date(2021,9,26,18,40);
const today = new Date();
const timeObjValue = {
    hour: 3600000,
    minute: 60000,
    second: 1000
}

function getQuantityTime(diff, value) {
    return Math.floor(diff / value);
}

function calculateAmountTime() {
    let difference = date - today;
    const hours = getQuantityTime(difference, timeObjValue.hour);
    difference -= hours * timeObjValue.hour;
    const minutes = getQuantityTime(difference, timeObjValue.minute);
    difference -= minutes * timeObjValue.minute;
    const seconds = getQuantityTime(difference, timeObjValue.second);
    console.log(hours,minutes,seconds);
}

calculateAmountTime()
// Your code here
function saturdayFun(activity = "roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
saturdayFun("bathe my dog")

function mondayWork(act = "go to the office"){
    return `This Monday, I will ${act}.`
}
mondayWork("work from home")

function wrapAdjective(something = "*"){
    return function inner(hype = "special"){
        return `You are ${something}${hype}${something}!`
    }
}
// Code your solutions in this file

function writeCards(recipients,eventName){
    const giftMsg = [];
    for(let i = 0; i < recipients.length; i++){
        giftMsg[i] = `Thank you, ${recipients[i]}, for the wonderful ${eventName} gift!`;
    }
    return giftMsg;
}

function countDown(integer){
    while(integer > -1){
        console.log(integer);
        integer -= 1;
    }
}
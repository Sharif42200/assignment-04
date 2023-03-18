// In this mindGame function, we take a input as a number must, then we multiply the number with 3 then add 10, then divided the number by 2, then subtruct 5 from the final number. After return the final output as result. Given below :  
function mindGame(number) {
    if (typeof number !== 'number') {
        return 'please enter a number';
    }
    else {
        let multipicationNumber = number * 3;
        let sumNumber = multipicationNumber + 10;
        let divNumber = sumNumber / 2;
        let subNumber = divNumber - 5;
        let result = subNumber;
        return result;
    }
}
const inputNumber = 5;
const output = mindGame(inputNumber);
console.log(output);
// problem : 1
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



// problem : 2
// In this 'evenOdd()' function, we take a input as string must. Then we check whether the string length is divided by 2 and remainder is 0 -> then return Even, OR the string length is not divided by 2 then return Odd.
function evenOdd(str) {
    if (typeof str !== 'string') {
        return 'input has to be a string';
    }

    else if (str.length % 2 === 0) {
        return 'even';
    }
    else {
        return 'odd';
    }
}
const strName = 'phero';
const output2 = evenOdd(strName);
console.log(output2);


// problem : 3
// In this 'isLGSeven' function, we take a input as number must. then subtract 7 from the number...if the subtract result is greater than 7, then multiply the number with 2, then return the result OR if the subtract result is less than 7, then just return the ramaining number.
function isLGSeven(number) {
    let subOfNumber = number - 7;
    if (typeof number !== 'number') {
        return 'please enter a number';
    }
    else if (subOfNumber < 7) {
        return subOfNumber;
    }
    else {
        let resultOfNumber = number * 2;
        return resultOfNumber;
    }
}
const inputNumbers = 15;
const output3 = isLGSeven(inputNumbers);
console.log(output3);


// problem : 4
// In this 'findingBadData' function, we take an input as array must. after that we check whether the array element is less then 0 , then return how many array element is there.Given Below : 
function findingBadData(age) {
    if (typeof age === 'boolean' || typeof age === 'number' || typeof age === 'string') {
        return 'insert an array';
    }
    let sumOfBadData = 0;
    for (let i = 0; i < age.length; i++) {
        const elementOfAge = age[i];

        if (elementOfAge < 0) {
            sumOfBadData = sumOfBadData + 1;
        }

    }
    return sumOfBadData;
}
// const age = [-4, -9, -5, -33, -55];
const age = [1, -2, -3, 3];
const output4 = findingBadData(age);
console.log(output4);


// problem : 5
// In this 'gemsToDiamond()' function, we take three parameter as input and they must should be numbers, then we multiply 21 with first parameter , 32 with 2nd parameter and 43 with 3rd parameter. Then add them all together and return as total...After that check the total is greater than 1000*2, then subtract 2000 from the total and return it...else return the remaining current total.
function gemsToDiamond(gem1, gem2, gem3) {
    const toDiamond1 = 21;
    const toDiamond2 = 32;
    const toDiamond3 = 43;

    const fisrtFriend = gem1 * toDiamond1;
    const secondFriend = gem2 * toDiamond2;
    const thirdFriend = gem3 * toDiamond3;

    let totalDiamond = fisrtFriend + secondFriend + thirdFriend;

    if (typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number') {
        return 'three input should be number , please';
    }
    else if (totalDiamond >= (1000 * 2)) {
        totalDiamond = totalDiamond - 2000;
        return totalDiamond;
    }
    else {
        return totalDiamond;
    }

}

const gem1 = 20;
const gem2 = 200;
const gem3 = 50;

const result = gemsToDiamond(gem1, gem2, gem3);
console.log(result);
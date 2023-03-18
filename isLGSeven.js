// In this 'isLGSeven' function, we take a input as number must. then subtract 7 from the number...if the subtract result is greater than 7, then multiply the number with 2, then return the result OR if the subtract result is less than 7, then just return the ramaining number.
function isLGSeven(number)
{
    let subOfNumber = number - 7;
    if(typeof number !== 'number')
    {
        return 'please enter a number';
    }
    else if(subOfNumber < 7)
    {
        return subOfNumber;
    }
    else
    {
        let resultOfNumber = number * 2;
        return resultOfNumber;
    }
}
const inputNumber = 15;
const output = isLGSeven(inputNumber);
console.log(output);
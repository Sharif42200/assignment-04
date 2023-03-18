// In this 'evenOdd()' function, we take a input as string must. Then we check whether the string length is divided by 2 and remainder is 0 -> then return Even, OR the string length is not divided by 2 then return Odd.
function evenOdd(str)
{
    if(typeof str !== 'string')
    {
        return 'input has to be a string';
    }

    else if(str.length % 2 === 0)
    {
        return 'even';
    }
    else{
        return 'odd';
    }
}
const strName = 'phero';
const output = evenOdd(strName);
console.log(output);
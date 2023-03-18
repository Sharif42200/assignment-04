// In this 'findingBadData' function, we take an input as array must. after that we check whether the array element is less then 0 , then return how many array element is there.Given Below : 
function findingBadData(age)
{
    if(typeof age === 'boolean' || typeof age === 'number' || typeof age === 'string')
    {
        return 'insert an array';
    }
    let sumOfBadData = 0;
    for(let i = 0; i < age.length; i++)
    {
        const elementOfAge = age[i];
        
        if(elementOfAge < 0)
        {
            sumOfBadData = sumOfBadData + 1;
        }
        
    }
    return sumOfBadData;
}
// const age = [-4, -9, -5, -33, -55];
const age = [1,-2,-3,3];
const output = findingBadData(age);
console.log(output);
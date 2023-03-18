// In this 'gemsToDiamond()' function, we take three parameter as input and they must should be numbers, then we multiply 21 with first parameter , 32 with 2nd parameter and 43 with 3rd parameter. Then add them all together and return as total...After that check the total is greater than 1000*2, then subtract 2000 from the total and return it...else return the remaining current total.
function gemsToDiamond(gem1 , gem2, gem3)
{
    const toDiamond1 = 21;
    const toDiamond2 = 32;
    const  toDiamond3 = 43;

    const fisrtFriend = gem1 * toDiamond1;
    const secondFriend = gem2 * toDiamond2;
    const thirdFriend = gem3 * toDiamond3;

    let totalDiamond = fisrtFriend + secondFriend + thirdFriend;

    if(typeof gem1 !== 'number' || typeof gem2 !== 'number' || typeof gem3 !== 'number')
    {
        return 'three input should be number , please';
    }
    else if(totalDiamond >= (1000*2))
    {
        totalDiamond = totalDiamond - 2000;
        return totalDiamond;
    }
    else{
        return totalDiamond;
    }

}

const gem1 = 20;
const gem2 = 200;
const gem3 = 50;

const result = gemsToDiamond(gem1 , gem2 , gem3);
console.log(result);
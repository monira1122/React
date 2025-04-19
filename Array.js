const num =[1,2,3,4,5,6,7,8,9,10]
//squared
//even number
//sum

//squared

function square(num)
{
    return num ** 2;
}
const squared =num.map(square)
console.log(squared)


//even number

function isEven(num)
{

return num % 2==0;

}

const evenNumbers =num.filter(isEven)
console.log(evenNumbers)

//sum

function sumNumbers(acc , current){


return acc + current;

}
const total=num.reduce(sumNumbers)
console.log(total) //
function myCat(firstName, lastName){
    const fullName = firstName + " " + lastName;
    return fullName;
}

console.log(myCat("WEb", "Design")); 

function myArray(arr){
    let sum = 0
    for(let i = 0; i<arr.length; i++)
    {
       sum+= arr[i];
    }
    mean = sum/arr.length;
    return mean;
}

arr=[1, 2, 3, 4, 5];
console.log(myArray(arr));

function myNumbers(myNumber){
    let space = "";
    for(let j = 1; j < myNumber; j++ ){
        console.log(space + j);
        space += " " 
    }
}

myNumbers(5)
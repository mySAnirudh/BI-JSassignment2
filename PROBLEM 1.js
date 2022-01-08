
// PROBLEM 1 
// You are provided with a number, "N". Find its factorial.
// Input Description: 
// A positive integer is provided as an input.
// Output Description: 
// Print the factorial of the integer.
// Sample Input :
// 5 
// Sample Output :
// 120

var factorialize = (num)=>{
    var fact = 1;
    for (let i = 1;i<=num;i++ ){
        fact *=i;
    }
    return fact;
}
console.log(factorialize(5));


// PROBLEM 6 
// Write a code to get an integer N and print the sum of values from 1 to N.
// Input Description: 
// A single line contains an integer N.
// Output Description: 
// Print the sum of values from 1 to N.
// Sample Input :
// 10
// Sample Output : 55

var sum = (N)=>{
    var Sum = 0
    for(let i = 1; i<=N ; i++){
        Sum += i;
    }
    return Sum;
}
console.log(sum(10))
// PROBLEM 7 
// You are provided with a number "N", Find the Nth term of the series: 1 , 4, 9, 16, 25, 
// 36, 49, 64, 81, .......
// (Print "Error" if N = negative value and 0 if N = 0).
// Input Description: 
// An integer N is provided to you as the input.
// Output Description: 
// Find the Nth term in the provided series.
// Sample Input :
// 18
// Sample Output :
// 324

var nThTerm = (num)=>{
    var error = "Error";
    if(num < 0 ){
        return error;
    }
    else if(num = 0){
        return 0;
    }
    return num*num;
}
console.log(nThTerm(0));
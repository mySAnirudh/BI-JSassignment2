// PROBLEM 4 
// You will be provided with a number. Print the number of days in the month 
// corresponding to that number.
// Note: In case the input is February, print 28 days. If the Input is not in valid range 
// print "Error".
// Input Description: 
// Input n -> month number
// Output Description: 
// Find the days in the month corresponding to the input number. Print Error if the input 
// is not in a valid range.
// Sample Input :
// 8 
// Sample Output :
// 31

var numOfDays = (index)=>{
    var error = "Error"
    let arr = [31,28,31,30,31,30,31,31,30,31,30,31];
    if(index < 1 || index > 12){ 
        return error; 
    }
    return arr[index-1];
    
}
console.log(numOfDays(-12))

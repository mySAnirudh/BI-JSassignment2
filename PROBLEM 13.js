// PROBLEM 13 
// Ajay is given a series(In example).he gone through the series but unable to understand 
// it properly,he has hired you.Your task is to understand the series and print the series 
// 2,6,12,20,30... .You are given with a number ānā. Find the nth number of series. 
// Input Description: 
// You will be given a number ānā
// Output Description: 
// Print the nth number of series
// // Sample Input :
// 5 
// Sample Output : 30 



var series = (Num)=> {
  return Num*(Num+1);
}

console.log(series(5));
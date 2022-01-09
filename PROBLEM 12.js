// PROBLEM 12 
// Simi is learning about palindromic numbers. Her teacher gave him the task to count 
// all palindromic numbers present in that range.Simi has told you about this and want 
// your help. You design an algorithm in order to help simi. 
// Input Description:  
// You will be given a number ‘n’
// Output Description:  
// Print the count of all palindromic numbers till ’n’(inclusive)
// Sample Input :
// 5 
// Sample Output :
// 5 


var isPalindrome = (n)=>{
	var rev = 0;
	for (var i = n; Math.trunc(i) > 0; i /= 10)
	{
		rev = ((rev*10) + (Math.trunc(i)%10));
	}
	return (n==rev);
}

function countPal(range)
{
    let count = 0;
	for (var i = 1; i <=range; i++)
	{
		if(isPalindrome(i))
		count++;
	}
	return count;
}

console.log(countPal(5));
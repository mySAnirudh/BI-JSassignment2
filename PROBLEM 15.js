// PROBLEM 15 
// You are given a postfix expression. Evaluate the given expression and print the result. 
// Input Description: 
// The first line of the input is a string N, containing operators and numbers seperated by 
// the single space which forms a postfix expression.
// Output Description: 
// Evaluate the post expression and print the result.
// Sample Input :
// 5 3 1 * + 9 -
// Sample Output :
// -1


// Javascript program to evaluate value of a postfix expression

// Method to evaluate value of a postfix expression
function evaluatePostfix(exp)
{
	//create a stack
		let stack=[];
		
		// Scan all characters one by one
		for(let i=0;i<exp.length;i++)
		{
			let c=exp[i];
			
			// If the scanned character is an operand (number here),
			// push it to the stack.
			if(! isNaN( parseInt(c) ))
			stack.push(c.charCodeAt(0) - '0'.charCodeAt(0));
			
			// If the scanned character is an operator, pop two
			// elements from stack apply the operator
			else
			{
				let val1 = stack.pop();
				let val2 = stack.pop();
				
				switch(c)
				{
					case '+':
					stack.push(val2+val1);
					break;
					
					case '-':
					stack.push(val2- val1);
					break;
					
					case '/':
					stack.push(val2/val1);
					break;
					
					case '*':
					stack.push(val2*val1);
					break;
			}
			}
		}
		return stack.pop();
}



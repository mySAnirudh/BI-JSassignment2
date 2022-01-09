// PROBLEM 10 
// Loki wants to steal the tesseract but in order to do so, he has to rearrange the elements 
// in an array in a specific manner which is mentioned in a clue. The clue says ‘cursed 
// are the odd and sorted are the even’. Loki manages to decode the clue which translates 
// to “sort the even positioned elements of an array, starting from the element at index 0, 
// in ascending order”. Manipulate the array so as to help Loki steal the tesseract.
// Input Description: 
// Size of the array followed by the elements of the array
// Output Description: 
// Even index array elements sorted in ascending order
// Sample Input :
// 5 3 9 1 44 6 
// Sample Output :
// 1 9 3 44 6 

var sort = (n,arr)=>{
    n = arr.length
    var a =[];
    var b =[];
    var c =[];
    for(let i = 0 ; i< n; i++){
        if(i%2 == 0){
            a.push(arr[i]);
            a.sort(function (a, b) {  return a - b;  });;
        }
        if(i%2 != 0){
            b.push(arr[i]);
        }
        let p = 0;
        let q = 0;
        let r = 0;
       while(p < a.length && q<= b. length){
           c[r++] = a[p++];
           c[r++] = b[q++];
       }     
    }
    return c.filter(Boolean);
}
console.log(sort(7,[9,7,15,12,14,4,6]));
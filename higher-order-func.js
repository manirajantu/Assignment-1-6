/*
    Task 1. Outer function calculate totalPrice, inner function return a GST payable price.

    Steps:
    - Create an outer function that takes the array "priceList" as an argument.
    - In the scope of the outer function, sum all the value in array "priceList" 
    and store the value in variable "totalPrice".
    - Return an inner function that multiply "totalPrice" with GST 7% and store 
    the value in variable "payablePrice".
    - The variable "payablePrice" should be returned in the inner function.
    - Make appropriate calls to the outer and inner function and console log
    the value of "payablePrice".
    
*/


const priceList = [10.5, 9.9, 8.9, 4.5];

function payablePrice(arr) {
  let grossTotal = 0;

  for (i = 0; i < arr.length ; i++){
    grossTotal += arr[i];
  }

  return function totalNetPrice (){
    let netPrice = 1.07 * grossTotal;
    return netPrice;
  }
}

console.log("Please pay: SGD$", payablePrice(priceList)());



/*
    Task 2. Manipulate the "queue" array.
*/

function createQueue(fn) {
  const queue = [1, 2, 3, 4];

  return fn(queue);
}


function createQueue(fn) {
  const queue = [1, 2, 3, 4];

  return fn(queue);
}

function addStartLast(arr){
    console.log("initial array", arr);
    arr.unshift("start");
    console.log("after adding start", arr);
    arr.push("last");
    console.log("after adding last", arr);

    return arr;
}

const result = createQueue(addStartLast); 

console.log(result);

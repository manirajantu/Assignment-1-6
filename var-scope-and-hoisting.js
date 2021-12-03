// Task 1


let name = "Mani"; // Global scope

function fullName() {
    let name = "Raja"; // Local variable 

   console.log(name); 
}

fullName();
console.log(name);



// Task 2


doSomething();

function doSomething(){
    console.log("do something");
}


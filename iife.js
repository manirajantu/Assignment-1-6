/*
    In this code base, we want to prepare multiple set of 
    credentials and establish connections with two separate databases.

    Use IIFE to create two separate executions for database connections
    that avoid variable names collision.
*/





const username = "username@mail.com";
const pwd = "password123";

function connectToDatabaseOne() {
    var username = "username@mail.com";
    var pwd = "password123";

  console.log(`Connect to db 1 with ${username} and ${pwd}`);

}
connectToDatabaseOne()





function connectToDatabaseTwo() {
    var username = "user@mail.com";
    var pwd = "password321";

  console.log(`Connect to db 2 with ${username} and ${pwd}`);

}
connectToDatabaseTwo()


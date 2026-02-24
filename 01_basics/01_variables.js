const accountId = 1234567890;
let accountGmail = "example@gmail.com";
var accountPassword = "password123";
accountCity = "New York"; 
let accountState; 
 //accountId = 9876543210; // This will cause an error because accountId is a constant
console.log(accountId);
accountGmail = "updated@example.com";
accountPassword = "newpassword456";
accountCity = "Los Angeles";

console.table([accountId, accountGmail, accountPassword, accountCity, accountState]);

/*
prefer not to use var, because it has function scope and can lead to unexpected behavior.
Use const for values that should not change and let for values that can be reassigned.

*/
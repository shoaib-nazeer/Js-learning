const accountId = 144537;
let accountEmail = "Hello@gmail.com";
var accountPassword = "316769";
accountCity = "Lahore";
let accountState;

// Prefer not to use var 
// Because issue in block scop and function scop


accountEmail = "HelloShoaibnazzer@google.com"  // you can chnage the values
// accountId = 6766;  // Not allowed you can't change the value of Const if you will rewrite the const value again it will show an error

// console.log(accountId)
// console.log(accountEmail);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])
/* Get Full Name */
function fullName(firstname=' ',lastname=' '){
    return firstname + ' ' + lastname;
}
let fullname = fullName('Shreyas','Suryawanshi');
let expected = 'Shreyas Suryawanshi';
if(fullname !== expected){
    throw new Error(`${fullname} is not same as ${expected}`);
}

fullname =fullName('Rohan', 'Suryawanshi');
expected = 'Rohan Suryawanshi';
if(fullname !== expected){
    throw new Error(`${fullname} is not same as ${expected}`);
}
else{
    console.log(fullname);
}
// After making the first test fail we do not see any output for second test

/* Calculate Total amount */
function total(amount, taxrate){
    return amount + (amount*taxrate);
}
let totalAmount= total(12000,0.1);
let assumed = 14200;
if(totalAmount !== assumed){
    throw new Error(`${totalAmount} is not same as ${assumed}`);
}
totalAmount = total(10000, 0.5);
assumed =15000;
if(totalAmount !== assumed){
    throw new Error(`${totalAmount} is not same as ${assumed}`);
}
// Here also, in this example we do not see the output of second function after making first test fail.
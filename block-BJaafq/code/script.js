function sum(numA, numB){
    return numA + numB;
}

function mul(numA, numB){
    return numA*numB;
}

function test(message, callback){
    try{
        callback();
        console.log('Done',message);
    }
    catch{
        console.log('Not Done', message);
    }
}
function expect(actual){
    return {
        isEqual : function(expected){
            if(actual != expected){
                console.log(`${total} is not same as ${expected}`);
            }
        }
    }
}
function testSum(){
    let total= sum(2,5);
    let expected = 7;
    expect(total).isEqual(expected);
}
test('Adding 2 and 5',testSum);

function testAdd(){
    let total= sum(3,5);
    let expected = 8;
    expect(total).isEqual(expected);
}
test("Adding 3 and 5", testAdd);

function testMul(){
    let total= mul(3,5);
    let expected = 15;
    expect(total).isEqual(expected);
}
test("Multiplying 3 and 5", testMul);

/* Tests */
test("adding 20 + 20 to be equal to 40",()=>{
    expect(sum(20,20)).isEqual(40);
})
test("multiplying 20 * 20 to be equal to 400",()=>{
    expect(mul(20,20)).isEqual(400);
})
test("multiplying 20 * 20 to be equal to 400",()=>{
    expect(mul(20,20)).isEqual(40);
})
test("adding 10 + 20 to be equal to 30",()=>{
    expect(sum(10,20)).isEqual(40);
})
test("adding 20 + 30 to be equal to 50",()=>{
    expect(sum(20,30)).isEqual(50);
})

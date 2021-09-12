const var2 = "Node!!!";
function createUser(name, age) {
    return `Hello my name is ${name} i am ${age}`
}

// exports.var1 = 'Variable_1';

function greatingMax() {
    console.log('Hello Max!!!');
}

module.exports = {
    var2,
    greatingMax,
    createUser
};
console.log('______________________________');
console.log(__filename);
console.log(__dirname);
console.log('______________________________');

global.globalVariable = 'I am Global Variable :)';

console.log(process.cwd(), '**process.cwd()**');
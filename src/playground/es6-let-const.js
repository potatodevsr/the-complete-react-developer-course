var nameVar = 'Chadapohn';
// var nameVar = 'Dao';
console.log('nameVar', nameVar);

let nameLet = 'Tanoo';
// nameLet = 'Tuna';
console.log('nameLet', nameLet);

const nameConst = 'Potato';
// nameConst = 'Chada'
console.log('nameConst', nameConst);

// Block scoping
const fullName = 'Chadapohn Sorakanit';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0]
    console.log(firstName);
}

console.log(firstName);

// const john = {
//     firstName: 'john',
//     lastName : 'anderson',
//     fullName: function(){
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     },
// };
// const bob = {
//     firstName: 'bob',
//     lastName : 'sanders',
//     fullName: function(){
//         console.log(`My full name is ${this.firstName} ${this.lastName}`);
//     },
// };

// john.fullName();
// bob.fullName()





// factory functions

// function createPerson(firstName,lastName){
//     return {
//         firstName: firstName,
//         lastName: lastName,
//         fullName: function(){
//             console.log(

//                 `My ful name is ${this.firstName} ${this.lastName}`
//                 );
//         }
//     }
// }



// const john = createPerson('john', 'anderson');
// john.fullName()
// const bob = createPerson('bob', 'anderson');
// bob.fullName()
// const susy = createPerson('susy', 'anderson');
// susy.fullName()



// Constructor function

// function Person(firstName , lastName){
//     this.firstName =firstName;
//     this.lastName = lastName;
//     this.fullName = function(){
//         console.log(

//             `My ful name is ${this.firstName} ${this.lastName}`
//             );
//     }
// }

// const john = new Person('john','anderson')
// john.fullName();
// const bob = new Person('bob','anderson')
// bob.fullName();



// function showThis(){

//     console.log(this);
// }

// const john = {
//     name: 'john',
//     showthis: showThis,
// }
// const bob = {
//     name: 'bob',
//     showthis: showThis,
// }

// john.showthis();
// bob.showthis();
// showThis()










// Prototype property

// function  Account(name, initialBalance){
//     this.name = name;
//     this.balance = initialBalance;

// }

// const john = new Account('john', 200)
// const bob = new Account('bob', 0)

// Account.prototype.bank = 'CHASE'
// Account.prototype.deposit = function(amount){
//     this.balance += amount;
//     console.log(`Hello ${this.name}, your balance is ${this.balance}`);
// }
// console.log(john.bank);
// console.log(bob);

// john.deposit(300)
// bob.deposit(1000)










// Es6 class syntax




// class Account {
//    constructor(name , initialBalance){
//       this.name = name;
//       this.balance = initialBalance;
//    }
//    bank = 'chase';
//    deposit(amount){
//     this.balance += amount;
//        console.log(`Hello ${this.name}, your balance is ${this.balance}`);
     
//    };
// }

// const john = new Account('john',0);
// console.log(john.name);
// john.deposit(500)
// console.log(john.bank);



// const bob = new Account('bob',900);
// console.log(bob.name);
// bob.deposit(500)
// console.log(bob.bank);












// // call

// const john = {
//     name:'john',
//     age:24,
// }
// const susan = {
//     name:'susan',
//     age:21,
// }

// // john.greet();

// function greet(city, country){
//     console.log(this);
//     console.log(`Hello, i am ${this.name} and i am ${this.age} years old and i live in ${city},${country}`);
// }

// // greet()

// // // call
// // greet.call(john, 'san diego', 'usa')
// // greet.call(susan, 'san diego', 'usa')
// // greet.call({name:'peter', age:30}, 'san diego', 'usa')
// // // Apply
// // greet.apply({name:'peter', age:30}, ['san diego', 'usa'])
// // greet.apply(john, ['san diego', 'usa'])
// // greet.apply(susan, ['san diego', 'usa'])


// // bind

// const susangreet = greet.bind(susan,['toronto','canada']);
// susangreet()








// button example



const counter = {
    count:0,
    increment(){
        console.log(this);
        this.count++;
        console.log(this.count);
    }
}
const btn = document.querySelector('.increment');
// will fail
// btn.addEventListener('click', counter.increment)

// some edge cases
// btn.addEventListener('click', counter.increment.bind(counter))


// runs smoothly

const increment = counter.increment.bind(counter);
btn.addEventListener('click',increment);

btn.removeEventListener('click', increment)
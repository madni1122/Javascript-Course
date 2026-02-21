// const userName1 = 'Muhammad'
// let userName2 = userName1
// userName2 = userName2 + ' Madni' // if add 'Madni' in userName2, so this creates a new string in memory and userName2 is given that new address now!


const array = ['Apple', 'Banana', 'Orange']
 
// Diff ways to duplicate above array but creating new array in memory:


// const myFruits = [...array] // use spread operator instead of Object.assign()
// // const myFruits = [].concat(array)
// // const myFruits = array.slice()

// myFruits.push('Mango') // now array won't be affected by this line as both variables are pointing at two diff arrays in memory Array group
// myFruits.push('Grapes')



// const myFruits = array




// Same for Objects too;

const user1 = {
    firstName: 'Muhammad',
    lastName: 'Madni',
    pata: { // this object is now allocated a specific address in memory.
        city: 'Gujrat',
        code: 12345
    },
    subjects: ['English', 'Maths', 'Urdu']
}

const user2 = {...user1} // same for arrays too like subjects array in our case
user2.subjects.push('Physics') 



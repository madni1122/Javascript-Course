// class createUser {
//   constructor(firstName, lastName, age) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.age = age;
//   }

//   getBirthYear() {
//     let birthYear = new Date().getFullYear() - this.age;
//     return birthYear;
//   }
//   get getFullName() {
//     return this.firstName + " " + this.lastName;
//   }
//   set getFullName(value) {
//     const [firstName, lastName] = value.split(" ");
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
// }

// const user1 = new createUser("Muhammad", "Madni", 26);
// const user2 = new createUser("Asad", "Javed", 65);

const user = {
  firstName: "Muhammad",
  lastName: "Madni",
  get fullName() {
    console.log("calling...");
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    const [firstName, lastName] = value.split(" ");
    this.firstName = firstName;
    this.lastName = lastName;
  },
};
// why is setter func introduce, look it only updates the first & last name in our case like doing this "user.fullName = "Mukaish Ambani";" but this is what we could have done like this too, why a setter func at all
console.log(user.fullName);
user.firstName = "Mukaish";
user.lastName = "Ambani";
console.log(user.fullName);


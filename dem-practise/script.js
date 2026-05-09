function CreateUser(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
CreateUser.prototype.getBirthYear = function () {
  return new Date().getFullYear() - this.age;
};
CreateUser.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

const user1 = new CreateUser("Muhammad", "Madni", 26);
const user2 = new CreateUser("Asad", "Javed", 27);
user1.__proto__.getBirthYear();

// jab bhi new keyword ka use kr k func call krty hain to wo func aik obj automatically create krta ha and use return b krta ha, aur jo prototype us constructor func ka hota ha use us object k sath jo wo return krat ha, attach kr deta ha

// now i fully understand "Constructor func", "new" keyword, "Inheritance" like prototype is inherited from func in each obj

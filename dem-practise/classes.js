class createUser {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  static myName = "Mukaish";

  static {
    // in static block "this" points the class
    this.myLastName = "Ambani";
    this.getFullName = function () {
      return this.firstName + " " + this.lastName;
    };
  }

  // in this method which goes to prototype of class, "this" keyword points to the obj which class creates and returns
  getBirthYear() {
    console.log(this.age);

    return new Date().getFullYear() - this.age;
  }
  static;
}
// you see "this" changes w.r.t. postioning

// const user1 = new createUser("Muhammad", "Madni", 26);
// const user2 = new createUser("Asad", "Javed", 65);

// this was static keyword and static block very simple and small topic but often used in tutorials.
// Now i understand static keyword or block creates property directly on class which won't be available in obj which class creates

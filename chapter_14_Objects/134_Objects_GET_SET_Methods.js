const user = {
    firstName: "Pramod",
    lastName: "Dutta",

    // GET = a method you READ like a property (no parentheses needed)
    // "this" means "look inside this same object"
    // So this.firstName = "Pramod" and this.lastName = "Dutta"
    get fullName(){
        return this.firstName + " " + this.lastName;  // joins first + last with a space
    },

    // SET = a method that runs when you ASSIGN a value
    // value = whatever you put on the right side of = ("Amit Sharma")
    // .split(" ") breaks the string into an array: ["Amit", "Sharma"]
    // Then firstName gets "Amit" and lastName gets "Sharma"
    set fullName(value){
        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(user.fullName);      // "Pramod Dutta"  — getter runs automatically
user.fullName = "Amit Sharma";   // setter runs, updates firstName and lastName
console.log(user.fullName);      // "Amit Sharma"   — getter reads the updated values
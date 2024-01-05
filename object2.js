//
const firstName = "lucycan";
console.log(firstName);

//object litera
const person = {
    firstName: "Lucycan", // key-value pair
    lastName: "Ly",
    birthday: "1979-01-05",
    greeting: function() {
    return `Hello World. My name is ${this.firstName} ${this.lastName}.`
    },
};

// dot accesor
console.log(person);
console.log(console);
console.log(person.firstName);
console.log(person.lastName);
console.log(person.birthday);
console.log(person.greeting());

//constructor function
function Person(firstName, lastName, birthday) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = birthday;
}

//Hard coded
const lucycan = new Person("Lucycan", "Ly", "1979-01-05")
console.log(lucycan)

const mike = new Person("Mike", "Johnson", "1985-05-05")
console.log(mike)

//grab the form element 
// . is for class and # is for 
const grabForm = document.querySelector("form");
console.log(grabForm);

const peopleArrayOfOjects = [];
grabForm.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log("message");
    const formData = new FormData(grabForm);
    console.log(formData);

    const firstName = formData.get("firstName");
    console.log(firstName);
    
    const lastName = formData.get("lastName");
    console.log(lastName);

    const birthday = formData.get("birthday");
    console.log(birthday);

    const newPerson = new Person(firstName, lastName, birthday);
    console.log(newPerson);

    
    peopleArrayOfOjects.push(newPerson);
    console.log(peopleArrayOfOjects);


});


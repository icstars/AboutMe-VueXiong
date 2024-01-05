// document.addEventListener("click", (p) => {
//     console.log("You have clicked anywhere in the document");
// });

//firstName
const grabFirstNameInput = document.getElementById("firstNameInput");
console.log(grabFirstNameInput);
//lastNAme
const grabLastNameInput = document.getElementById("lastNameInput");
console.log(grabLastNameInput);
//birthday
const grabDateInput = document.getElementById("dateInput");
console.log(grabDateInput);

const grabSubmitBtn = document.getElementById('submitBtn');
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("This is the Like button");
    console.log(grabFirstNameInput.value);
    console.log(grabLastNameInput.value);
    console.log(grabDateInput.value);

const paragraphElement = document.querySelector(".paragraph");
console.log(paragraphElement);

paragraphElement.textContent = `${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabDateInput.value}. Thank You for liking!`

//when we click the LIKE button the paragraph will appear
// Lucycan Ly, youre birthday is 01/05/1979. Thank You for liking!

console.log(`${grabFirstNameInput.value} ${grabLastNameInput.value} your birthday is ${grabDateInput.value}. Thank You for liking!`);


//clear value
grabFirstNameInput.value="";
grabLastNameInput.value="";
grabDateInput.value="";



});


// function fncClicked() {
//     console.log("This function was called down there");
// }

// document.addEventListener("click", fncClicked);

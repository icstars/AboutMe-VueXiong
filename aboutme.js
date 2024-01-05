const grabfavoriteFoodInput = document.getElementById("favoriteFoodInput");
console.log(grabfavoriteFoodInput);

const grabwhyIsInput = document.getElementById("whyIsInput");
console.log(grabwhyIsInput);

const grabSubmitBtn = document.getElementById('submitBtn');
console.log(grabSubmitBtn);

grabSubmitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    console.log("This is the Like button");
    console.log(grabfavoriteFoodInput.value);
    console.log(grabwhyIsInput.value);

const paragraphElement = document.querySelector(".paragraph");
console.log(paragraphElement);

paragraphElement.textContent = `My favorite food is ${grabfavoriteFoodInput.value} because ${grabwhyIsInput.value}. Thank You for sharing!`

console.log(`My favorite food is ${grabfavoriteFoodInput.value} because ${grabwhyIsInput.value}. Thank You for sharing!`);


grabfavoriteFoodInput.value="";
grabwhyIsInput.value="";

});
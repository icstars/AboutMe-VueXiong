let list = [];

let addingToList = true;

let name;
let email;
let password;
let userLookup;

function toDoList (person, address, pass) {
    return {
        name: person,
        email: address,
        password: pass
    }
}

while (addingToList) {

    name = prompt("Enter a username");
    email = prompt("Enter an email");
    password = prompt ("Enter a password")
    list.push(toDoList(name,email,password));
    console.table(list);
    if (confirm("Do you want to add another user?")) {
        continue;
    } else if (confirm("Do you want to see a certain user?")) {
        
        look = prompt("Enter the username of the user you want to see:");
        for (let i = 0; i < list.length; i++) {
            if (list[i].name == look) { //(list[i].name) is equal to the value stored in the variable look
                userLookup = list[i];
                break;
            }
        }
        if (userLookup) {
            console.log(userLookup);
        } else {
            console.log("User not found.");
        }
        addingToList = false;
    }
    
}


console.table(list);


firstName = prompt("Please enter your first name here.")
    .trim();
firstNamelenght = firstName.lenght;
firstName = `${firstName[0].toUpperCase()}${firstName.slice(1, firstNamelenght)}`;

lastName = prompt("Please enter your last name here.")
    .trim();
    lastNamelenght = lastName.lenght;
    lastName = `${lastName[0].toUpperCase()}${lastName.slice(1, lastNamelenght)}`;

yearBirth = parseInt(prompt("Please enter your year of birth.")
    .replaceAll(" ", ""));
today = new Date();
yearNow = today.getFullYear();
age = yearNow - yearBirth;

email = prompt("Please enter your email.")
    .replaceAll(" ", "")
    .toLowerCase();

if(email.indexOf(`@`) == -1){
    message = `not valid email <b>${email}</b> (symbol @ not exist)`;
} else if(!email.indexOf(`@`)){
    message = `not valid email <b>${email}</b> (symbol @ find in first place)`;
} else if(email.indexOf(`@`) == email.length-1){
    message = `not valid email <b>${email}</b> (symbol @ find in last place)`;
} else {
    message = `<b>${email}</b>`;
}

document.write(`<ul>
                    <li>Full name: <b>${firstName}</b> <b>${lastName}</b></li>
                    <li>Email: ${message}</li>
                    <li>Age: <b>${age}</b></li>
                </ul>`);
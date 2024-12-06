
// container for info in HTML
const infoContainer = document.querySelector('.info-container');

// data in local storage
const userData = JSON.parse(localStorage.getItem('userData'));


const userName = document.createElement('p');
const userEmail = document.createElement('p');
const userMessage = document.createElement('p');
userName.innerHTML = userData.name;
userEmail.innerHTML = userData.email;
userMessage.innerHTML = userData.message;

console.log(userName)

infoContainer.appendChild(userName)

infoContainer.appendChild(userEmail);
infoContainer.appendChild(userMessage);
console.log(userData)


console.log(userData)


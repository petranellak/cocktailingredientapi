document.addEventListener("DOMContentLoaded", function () {
  const contactMe = document.querySelector("form");

  contactMe.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission if validation fails
    if (!validateForm()) {
      return;
    } else {
      const nameInput = document.getElementById("name").value.trim();
      const emailInput = document.getElementById("email").value.trim();
      const messageInput = document.getElementById("message").value.trim();
      const userInfo = {
        name: nameInput,
        email:emailInput,
        message:messageInput
      }

      
// Using local storage
      console.log(userInfo);
      localStorage.setItem('userData', JSON.stringify(userInfo))
      alert(`Thank you for submitting, ${nameInput}!`);
      window.location.href = "./message.html";
    }
  });

  function validateForm() {

  //  validation of form if entered wrong
    let x = document.forms["contactMe"]["name"].value;
    if (x == "") {
      alert("Please enter your name");
      return false;
    }
    let y = document.forms["contactMe"]["email"].value;
    if (y == "") {
      alert("Please enter an email");
      return false;
    }
    let z = document.forms["contactMe"]["message"].value;
    if (z == "") {
      alert("Please enter a message");
      return false;
    }
    
    return true;
  }
});

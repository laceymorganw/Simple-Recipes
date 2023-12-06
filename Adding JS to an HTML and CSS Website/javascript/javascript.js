//RECIPE POP UP MODAL SECTION
// Sets up the button that will open the recipe modal
var btn = document.querySelectorAll("input.modal-button");

// defines all modals for each recipe
var modals = document.querySelectorAll('.recipe-modal');

// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

// When the user clicks the button, open the modal
for (var i = 0; i < btn.length; i++) {
    btn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "block";
            }
        }
    }
}

// When the user clicks on <span> (x), close the modal
for (var i = 0; i < closeBtn.length; i++) {
    closeBtn[i].onclick = function () {
        for (var index in modals) {
            if (modals[index].style) {
                modals[index].style.display = "none";
            }
        }
    }
}

//EMAIL VALIDATION

document.getElementById('contactForm').addEventListener('submit', function (event) {
    //Prevents browser automatically reloaded once user presses submit
    event.preventDefault();

    // Validate email 
    //Show how this works by not putting a full email address in and pressing Submit to trigger 
    //the alert. And explain how the below email pattern works
    const email = document.getElementById('email').value;
    //Email pattern checks for all symbols that would be need for an email address suchs as
    //the @ symbol and . and the text that would come before, between and after. 
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    //Use this variable to display messages if fields are filled out or thank you message
    const valMsg = document.getElementById('validateMsg');

    // Check other fields are filled out
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const phone = document.getElementById('phone').value;
    const message = document.getElementById('message').value;

   if (!firstName || !lastName || !phone || !message) {
        //Checks if fields have been filled out
        valMsg.innerHTML = '<p style="color: red;">Please fill out all empty fields</p>';
    } else if (!emailPattern.test(email)) {
        //Checks if there is a valid email 
        event.preventDefault();
        valMsg.innerHTML = '<p style="color: red;">Please enter a valid email address</p>';
    } else{
        //If all fields are filled out correctly display thank you message
        valMsg.innerHTML = '<p style="color: red;">Thank you for submitting!</p>';
    }


    // Here you can specify where the form data will be sent (e.g., an email address)
    const formData = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone,
        message: message,
        subscribe: document.getElementById('subscription').checked
    };

    //Displays what that user wrote in the console
    console.log(JSON.stringify(formData2))
});

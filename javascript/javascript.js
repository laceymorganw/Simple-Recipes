//RECIPE POP UP MODAL SECTION

//Sets up the button that will open the recipe modal
var btns = document.querySelectorAll("input.modal-button");

//Defines all modals for each recipe
var modals = document.querySelectorAll(".recipe-modal");

//Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName("close-btn");

for (var i = 0; i < btns.length; i++) {
    btns[i].onclick = function (event) {
        modal = document.querySelector(event.target.getAttribute
        ("href"));
        modal.style.display = "block";
    }
}

//When the user clicks on <span> (x), close the modal
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

document.getElementById('contactForm').addEventListener('submit',
    function () {
        //Variables to validate that each field is filled out
        const firstName = document.getElementById('firstName').value;
        
    }
)
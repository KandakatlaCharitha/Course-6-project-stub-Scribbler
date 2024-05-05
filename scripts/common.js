// Get the modal
var modal = document.getElementById("mymodal");

// Get the button that opens the modal
var btn = document.getElementById("signup");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
  }

  // When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }

  var modal1 = document.getElementById("mymodal1");
  var btn1 = document.getElementById("signin");
  var span = document.getElementsByClassName("close")[1];
  btn1.onclick = function() {
    modal1.style.display = "block";
  }
  span.onclick = function() {
    modal1.style.display = "none";
  }
  window.onclick = function(event) {
    if (event.target == modal1) {
      modal1.style.display = "none";
    }
  }

  var signUpLink = document.querySelector(".not-mem a");
  signUpLink.onclick = function() {
    modal.style.display = "block";
    modal1.style.display = "none"; // Ensure the sign-in modal is hidden
}

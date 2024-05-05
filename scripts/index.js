
var mod=document.getElementById("createmodal");
var cross = document.getElementsByClassName("close")[2];
var button=document.getElementById("createpost");
button.onclick=function(){
  mod.style.display= "block";
}

cross.onclick = function() {
  mod.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == mod) {
    mod.style.display = "none";
  }
}

// document.getElementById("allposts").addEventListener("click", function() {
//     // Redirect to postslist.html inside the html folder
//     window.location.href = "html/postlist.html";
// });
document.getElementById("allposts").addEventListener("click", function() {
  // Open postslist.html inside the html folder in a new tab
  window.open("html/postlist.html", "_blank");
});

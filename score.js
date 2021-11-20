// variables
var backEl = document.querySelector("#back");
var disEl = document.querySelector("#display");
var clearBtn = document.querySelector("#clear");

var ns = []

// pull scores from local storage
ns = localStorage.getItem("scores")
// transform local storage information
ns = JSON.parse (ns)
// make sure something is in the array before displaying
if(ns != null) {
ns.forEach(display);

// function to display name and scores in a list on the page
function display (item) {

    var li = document.createElement("li");
    li.textContent = item;
    disEl.appendChild(li);
}
}

// if code quiz button is pressed go back to the Quiz page
backEl.addEventListener("click", function(){

      window.location.assign("./index.html");
})
// if clear scores button is press, delete values in localstorage and refresh page
clearBtn.addEventListener("click", function(){

          localStorage.clear ()
          ns = []
          window.location.reload()

    })
var backEl = document.querySelector("#back");
var disEl = document.querySelector("#display");
var clearBtn = document.querySelector("#clear");

var ns = []


    
ns = localStorage.getItem("scores")

ns = JSON.parse (ns)

if(ns != null) {
ns.forEach(display);


function display (item) {

    var li = document.createElement("li");
    li.textContent = item;
    disEl.appendChild(li);
}
}


backEl.addEventListener("click", function(){

//   window.alert("hello")
      window.location.assign("./index.html");
})

clearBtn.addEventListener("click", function(){

    
          localStorage.clear ()
          ns = []
          window.location.reload()

    })
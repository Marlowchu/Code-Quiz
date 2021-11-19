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
// ns = JSON.parse (ns)



//  window.alert ( "hey" );

//  disEl.textContent = ns;


    // ns.forEach(element => {
    //     disEl.textContent
    // });




//  // Render a new li for each todo
//  for (var i = 0; i < ns.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }



backEl.addEventListener("click", function(){

//   window.alert("hello")
      window.location.assign("./index.html");
})

clearBtn.addEventListener("click", function(){

    
          localStorage.clear ()
          ns = []
          window.location.reload()

    })
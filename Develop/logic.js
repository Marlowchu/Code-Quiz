

var timerEl = document.querySelector("#counter");
var startBtn = document.querySelector("#start");
var scoreBtn = document.querySelector("#score");

var questionEl = document.querySelector(".question");
var answersEl = document.querySelector(".answers");

var mainEl = document.querySelector("#main");
var h2El = document.querySelector("#h2");

var instructionEl = document.querySelector("#instruction");


var result = [];
var timerCount = ""
var correct = ""
var lose = ""

var questions = ["question 1", "NAME", "question 3", "question 4"];
// var question1Ans = ["#A", "#B","#C", "#D"]
var question2Ans = [ "fish", "B", "C", "D" ];
// var question3Ans = ["A", "B", "C", "D"]
var question1Ans = ["<button id = A>item</button> <br>", "<button id = B>item</button> <br>", "<button id = C>item</button> <br>", "<button id = D>item</button>"]

var qnum = 0

// var D = document.querySelector("#D")


// when start button is pressed
startBtn.addEventListener("click", function () {
  
  timerCount = 51
  timerfunc()
  question1()
  startBtn.remove()
  scoreBtn.remove()
  instructionEl.remove()

});


scoreBtn.addEventListener("click", function () {
  
  location.assign("./score.html");

});


function question1 () {

      
  // questions.forEach(function(item, index, array){

  for (i = 0; i < questions.length; i++) {
   
    
  
    questionEl.textContent = questions [qnum];

    // question1Ans.forEach(element => answersEl.append (element));


      if (qnum == 0) {
        
      
  answersEl.innerHTML = "<button id = A>cat</button> <br> <button id = B>dog</button> <br> <button id = C>frog</button> <br> <button id = D>fish</button>";


    (answersEl.addEventListener("click", answerfunc))

      }

      if (qnum == 1) {
        
      
        answersEl.innerHTML = "<button id = A>1</button> <br> <button id = B>1</button> <br> <button id = C>3</button> <br> <button id = D>4</button>";
    
    
          (answersEl.addEventListener("click", answerfunc))
    
            }

          if (qnum == 2) {
        
      
              answersEl.innerHTML = "<button id = A>1</button> <br> <button id = B>2</button> <br> <button id = C>3</button> <br> <button id = D>4</button>";
          
          
                (answersEl.addEventListener("click", answerfunc))
          
                  }

                  if (qnum == 3) {
        
      
                    answersEl.innerHTML = "<button id = A>3</button> <br> <button id = B>3</button> <br> <button id = C>3</button> <br> <button id = D>4</button>";
                
                
                      (answersEl.addEventListener("click", answerfunc))
                
                        }
   
  }
    
  }


// start timer
function timerfunc () {
  
  timer = setInterval (function() {
    timerCount--;

if (timerCount <= 0) {

  window.alert("You lose")
  clearInterval(timer);
}

    timerEl.textContent = timerCount;
  
  }

, 1000
  )
}

// CHECK answers
function answerfunc (event) {

 if (event.target != answersEl) {
  // console.log ("clicked button")
  // console.log (answersEl)
 
console.log (event.target.textContent)
console.log (question2Ans[qnum])

  if (event.target.textContent == question2Ans[qnum]) {
  console.log ("CORRECT")
  qnum ++
  question1()
   }

   else{
     timerCount = timerCount -7;
      console.log ("INCORRECT")
       qnum ++
       question1()
     }
     if (qnum ==questions.length) {
      clearInterval(timer);
      console.log(timerCount)

      questionEl.textContent = "";

      answersEl.innerHTML = "";

      timerEl.textContent = "";
      h2El.textContent = ""

      done ()
      // call score page/ funtion

     }
}
}


function done () {

  mainEl.textContent = "ALL DONE!";

  h2El.textContent = "Your score is " + timerCount;


  var pEl = document.createElement("P");
  var t = document.createTextNode("Enter name: ");
  pEl.appendChild(t);
  document.body.appendChild(pEl);

  var inpEl = document.createElement("input");
inpEl.setAttribute("type", "text");
// inpEl.setAttribute("id", "input");
// inpEl.textContent = ""
document.body.appendChild(inpEl);

var bEl = document.createElement("input");
bEl.setAttribute("type", "button");
bEl.setAttribute("value", "Submit");
document.body.appendChild(bEl);


bEl.addEventListener("click", function(){


  // localStorage.clear()

  var inputText = inpEl.value;
 
  var save = inputText + " " + timerCount
  

  // var 
  // var input = document.getElementById(input).value;
    // var grab = inputText+" " + timerCount;

  result = localStorage.getItem("scores");

  result = JSON.parse(result);

  if (result === null) {
    result = []
  }

    result.push(save);

    var updateScore = JSON.stringify (result);
 
  localStorage.setItem("scores", updateScore);

  
    location.assign("./score.html");
   
});




}
  

// function saveScore (result) {
  
//   localStorage.setItem("player", result);
  
// }












// variables to keep track of quiz state


// variables to reference DOM elements


//function to get the quiz going 

//function to pull each question
    //current question from questions
    //updated DOM elements to reflect the new question
    //clear old question choices
    //loop over answer choices (TIP: ForEach ;) ) 
    //create new button for each choice
    //event listener for each choice
    //display on the page



      // question 1
  // questionEl.textContent = questions[0];
  // answersEl.innerHTML = "<button id = A>A</button> <br> <button id = B>B</button> <br> <button id = C>C</button> <br> <button id = D>D</button>";
  
  // var D = document.querySelector("#D");
  
  //  (answersEl.addEventListener("click", answerfunc)) 





//function for the questionclick 
  //did the user guess right or wrong
  //wrong guess decreases time
  //display new time on the page
  //move to the next question
  //check if there are any questions left/you've run out

//function to end the quiz
  //stops timer
  //shows end screen
  //shows final score
  //hides questions section

 //function for the clock 
  //updates time
  //checks if user ran out of time 

//function to save the high score
  //get value of input box
  //make sure value isnt empty
  //get saved scores from localstorage, or if not any, set to empty array
  //format new score object for current user 
  //save to localstorage
  //redirect to next page




// user clicks button to submit initials


// user clicks button to start quiz


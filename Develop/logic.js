

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
var correct = 0


var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ____. ", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables."," A very useful tool used during development and debugging for printing content to the debugger is: "];

var question2Ans = [ "alerts", "parentheses", "all of the above", "quotes", "console.log" ];


var qnum = 0




// when start button is pressed
startBtn.addEventListener("click", function () {
  
  timerCount = 76
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

  for (i = 0; i < questions.length; i++) {
   
    questionEl.textContent = questions [qnum];

  
      if (qnum == 0) {
        
      
  answersEl.innerHTML = "<button id = A>strings</button> <br> <button id = B>booleans</button> <br> <button id = C>alerts</button> <br> <button id = D>numbers</button>";


    (answersEl.addEventListener("click", answerfunc))

      }

      if (qnum == 1) {
        
      
        answersEl.innerHTML = "<button id = A>quotes</button> <br> <button id = B>curly brackets</button> <br> <button id = C>parentheses</button> <br> <button id = D>square brackets</button>";
    
    
          (answersEl.addEventListener("click", answerfunc))
    
            }

          if (qnum == 2) {
        
      
              answersEl.innerHTML = "<button id = A>numbers and strings</button> <br> <button id = B>other arrays</button> <br> <button id = C>booleans</button> <br> <button id = D>all of the above</button>";
          
          
                (answersEl.addEventListener("click", answerfunc))
          
                  }

                  if (qnum == 3) {
        
      
                    answersEl.innerHTML = "<button id = A>commas</button> <br> <button id = B>curly brackets</button> <br> <button id = C>quotes</button> <br> <button id = D>parentheses</button>";
                
                
                      (answersEl.addEventListener("click", answerfunc))
                
                        }

                        if (qnum == 4) {
        
      
                          answersEl.innerHTML = "<button id = A>JavaScript</button> <br> <button id = B>terminal / bash</button> <br> <button id = C>for loops</button> <br> <button id = D>console.log</button>";
                      
                      
                            (answersEl.addEventListener("click", answerfunc))
                      
                              }
   
  }
    
  }


// start timer
function timerfunc () {
  
  timer = setInterval (function() {
    timerCount--;

if (timerCount <= 0) {

  clearInterval(timer);
  questionEl.textContent = "";

  answersEl.innerHTML = "";

  timerEl.textContent = "";
  done ();
}

    timerEl.textContent = timerCount;
  
  }

, 1000
  )
}

// CHECK answers
function answerfunc (event) {

 if (event.target != answersEl) {
 
 
console.log (event.target.textContent)
console.log (question2Ans[qnum])

  if (event.target.textContent == question2Ans[qnum]) {
  console.log ("CORRECT")
  correct ++
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

     }
}
}


function done () {

  mainEl.textContent = "ALL DONE!";

  h2El.textContent = "Your score is " + timerCount + ". You got " + correct + "/" + qnum + " correct";


  var pEl = document.createElement("P");
  var t = document.createTextNode("Enter name: ");
  pEl.appendChild(t);
  document.body.appendChild(pEl);

  var inpEl = document.createElement("input");
inpEl.setAttribute("type", "text");

document.body.appendChild(inpEl);

var bEl = document.createElement("input");
bEl.setAttribute("type", "button");
bEl.setAttribute("value", "Submit");
document.body.appendChild(bEl);


bEl.addEventListener("click", function(){

  var inputText = inpEl.value;
 
  var save = inputText + " " + timerCount

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


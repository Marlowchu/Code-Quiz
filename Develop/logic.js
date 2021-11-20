
// variables
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

// questions
var questions = ["Commonly used data types DO NOT include:", "The condition in an if / else statement is enclosed within ____. ", "Arrays in JavaScript can be used to store ____.", "String values must be enclosed within ____ when being assigned to variables."," A very useful tool used during development and debugging for printing content to the debugger is: "];
// answers
var question2Ans = [ "alerts", "parentheses", "all of the above", "quotes", "console.log" ];

// question number var
var qnum = 0

// when start button is pressed set timer, start timer, ask questions
startBtn.addEventListener("click", function () {
  
  timerCount = 76
  timerfunc()
  question1()
  startBtn.remove()
  scoreBtn.remove()
  instructionEl.remove()

});

// if score button is pressed go to score page
scoreBtn.addEventListener("click", function () {
  
  location.assign("./score.html");

});

// function to ask questions
function question1 () {
// iterate through questions and display it 
  for (i = 0; i < questions.length; i++) {
   
    questionEl.textContent = questions [qnum];

  // question 1 choices
      if (qnum == 0) {
        
  // display choices on button
  answersEl.innerHTML = "<button id = A>strings</button> <br> <button id = B>booleans</button> <br> <button id = C>alerts</button> <br> <button id = D>numbers</button>";

  // check to see what answer was choosen 
    (answersEl.addEventListener("click", answerfunc))

      }
 // question 2 choices
    if (qnum == 1) {
        
     answersEl.innerHTML = "<button id = A>quotes</button> <br> <button id = B>curly brackets</button> <br> <button id = C>parentheses</button> <br> <button id = D>square brackets</button>";
    
      (answersEl.addEventListener("click", answerfunc))
    
         }
 // question 3 choices
          if (qnum == 2) {
        
              answersEl.innerHTML = "<button id = A>numbers and strings</button> <br> <button id = B>other arrays</button> <br> <button id = C>booleans</button> <br> <button id = D>all of the above</button>";
          
                (answersEl.addEventListener("click", answerfunc))
          
                  }
 // question 4 choices
                  if (qnum == 3) {
        
                    answersEl.innerHTML = "<button id = A>commas</button> <br> <button id = B>curly brackets</button> <br> <button id = C>quotes</button> <br> <button id = D>parentheses</button>";
                
                      (answersEl.addEventListener("click", answerfunc))
                
                        }
 // question 5 choices
                        if (qnum == 4) {
        
                          answersEl.innerHTML = "<button id = A>JavaScript</button> <br> <button id = B>terminal / bash</button> <br> <button id = C>for loops</button> <br> <button id = D>console.log</button>";
                      
                            (answersEl.addEventListener("click", answerfunc))
                      
                              }
  }
  }

// start timer functiion
function timerfunc () {
  // set timer and decrease it by one.
  timer = setInterval (function() {
    timerCount--;
// if timer is less than 0 stop count down and remove question and answers
if (timerCount <= 0) {

  clearInterval(timer);
  questionEl.textContent = "";

  answersEl.innerHTML = "";

  timerEl.textContent = "";
  done ();
}
// display count down
    timerEl.textContent = timerCount;
  }
, 1000
  )
}

// CHECK answers
function answerfunc (event) {
// make sure a button was pressed and not just a click in the container
 if (event.target != answersEl) {
 
// check if button clicked matches the correct answer in variable. call next question
  if (event.target.textContent == question2Ans[qnum]) {
  console.log ("CORRECT")
  correct ++
  qnum ++
  question1()
   }
// if it doesn't match then it is incorrect. call next question.
   else{
     timerCount = timerCount -7;
      console.log ("INCORRECT")
       qnum ++
       question1()
     }

// when you reach the last question stop timer and remove questions and answers
     if (qnum == questions.length) {

      clearInterval(timer);
     
      questionEl.textContent = "";

      answersEl.innerHTML = "";

      timerEl.textContent = "";

      h2El.textContent = "";

      done ()

     }
}
}

// Function when all questions are answered or time runs out.
function done () {

  mainEl.textContent = "ALL DONE!";
// display your score and the number of questions you answered correct
  h2El.textContent = "Your score is " + timerCount + ". You got " + correct + "/" + qnum + " correct";

// create p tag and text to be displayed in it
  var pEl = document.createElement("P");
  var t = document.createTextNode("Enter name: ");
  pEl.appendChild(t);
  document.body.appendChild(pEl);
// create input box
  var inpEl = document.createElement("input");
inpEl.setAttribute("type", "text");

document.body.appendChild(inpEl);
// create submit button
var bEl = document.createElement("input");
bEl.setAttribute("type", "button");
bEl.setAttribute("value", "Submit");
document.body.appendChild(bEl);

// submit button listener
bEl.addEventListener("click", function(){
// grab user input and join it with the score
  var inputText = inpEl.value;
 
  var save = inputText + " " + timerCount
// grab scores in local storage
  result = localStorage.getItem("scores");

  result = JSON.parse(result);
// if noting is in local storage create empty array so you don't get error
  if (result === null) {
    result = []
  }
// add user input plus score to array
    result.push(save);
// transform array
    var updateScore = JSON.stringify (result);
//  add array to local storage
  localStorage.setItem("scores", updateScore);

  // pull up scores page
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


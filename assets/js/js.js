var questionOne = document.querySelector(".question1")
var questionTwo = document.querySelector(".question2")
var questionThree = document.querySelector(".question3")
var questionFour = document.querySelector(".question4")
var correctAnswerOne = document.querySelector(".correct1")
var correctAnswerTwo = document.querySelector(".correct2")
var correctAnswerThree = document.querySelector(".correct3")
var correctAnswerFour = document.querySelector(".correct4")
var incorrectAns = document.querySelectorAll(".incorrect");

var timer = document.querySelector(".time");
var timerInterval;
var timeLeft = 60;
var startBtn = document.querySelector(".startbutton");
var startQuiz = document.querySelector(".startquiz");
var quit = document.querySelector(".buttons")
var count = 0;
var incrementEl = document.querySelector("#increment");
var decrementEl = document.querySelector("#Decrease");
var countEl = document.querySelector("#count");
var finalScore = document.querySelector(".scoredisplay")


function setCounterText() {
  countEl.textContent = count;
}

correctAnswerOne.addEventListener('click', function () {
  count++;
  setCounterText();
});
correctAnswerTwo.addEventListener('click', function () {
  count++;
  setCounterText();
});
correctAnswerThree.addEventListener('click', function () {
  count++;
  setCounterText();
});
correctAnswerFour.addEventListener('click', function () {
  count++;
  setCounterText();
});

incorrectAns.forEach(function (element) {
  element.addEventListener("click",
    function deductTime() {
      timeLeft = timeLeft - (10);
      if (incorrectAns);
      incorrectAns.textContent = "Incorrect";
      count--;
      setCounterText();
    });
})

function AllQuestionRun() {
  clearInterval(timerInterval);
  document.querySelector('.scoredisplay').style.display = "block";
  document.querySelector('.question1').style.display = "none";
  document.querySelector('.question2').style.display = "none";
  document.querySelector('.question3').style.display = "none";
  document.querySelector('.question4').style.display = "none";
  document.querySelector('.score').innerHTML = secondsLeft
  console.log(secondsLeft)
}

startBtn.addEventListener("click",
  function countdown() {
    var timeInterval = setInterval(function () {
      timeLeft--;
      timer.textContent = "Time: " + timeLeft + "s";
      if (timeLeft <= 0) {
        clearInterval(timeInterval);
        window.confirm("You have ran out of time. Please restart and try again :)");
        window.location.reload();
      }
    }, 1000);

    function displayOne() {
      questionOne = document.querySelector('.question1').style.display = "block";
      startQuiz = document.querySelector('.startquiz').style.display = "none";
    }
    displayOne();
  });

correctAnswerOne.addEventListener("click",
  function displayTwo() {
    questionOne = document.querySelector('.question1').style.display = "none";
    questionTwo = document.querySelector('.question2').style.display = "block";
  });

correctAnswerTwo.addEventListener("click",
  function displayThree() {
    questionTwo = document.querySelector('.question2').style.display = "none";
    questionThree = document.querySelector('.question3').style.display = "block";
  });
correctAnswerThree.addEventListener("click",
  function displayFour() {
    questionThree = document.querySelector('.question3').style.display = "none";
    questionFour = document.querySelector('.question4').style.display = "block";
  });
correctAnswerFour.addEventListener("click", AllQuestionRun)

quit.onclick = () => {
  window.location.reload();
};


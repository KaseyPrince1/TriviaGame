
let card = $("#quiz"); 


let questions = [{
    question: "In what year did American women win the right to vote?",
    answers: [
        "1897",
        "1920",
        "1932",
        ],
    correctAnswer: "1920"
  },
    {
    question: "In 1932, Amelia Earhart was the first woman to:",
    answers: [
        "Fly a plane",
        "Fly solo across the Atlantic",
        "Join the AirForce"
        ],
    correctAnswer:"Fly solo across the Atlantic"
    },
  {
    question: "Who was the first American woman to win the Nobel Peace Prize?",
    answers: [
        "Jane Addams",
        "Jody Williams",
        "Oprah Winfrey"
        ],
    correctAnswer: "Jane Addams"
  },
    {
    question: "What was the first state to allow women to vote?",
    answers: [
        "Wyoming",
        "Utah",
        "Washington"
        ],
    correctAnswer: "Wyoming",
    }
];

let timer;

let game = {
    correct: 0,
    incorrect: 0,
    counter: 120,

    countdown: function(){
        game.counter--;
        $('#counter-number').html(game.counter);
        if (game.counter===0){
            alert("Whoops, you are out of time");
            game.end();
        }
    },

    start: function(){
        timer = setInterval(game.countdown, 1000);

        $('#sub-wrapper').prepend(
            '<h2>Time Remaining: <span id="counter-number"></span> Seconds</h2>'
        );

        $('#start').remove();

          for(let i = 0; i < questions.length; i++) {
            card.append('<h2>' + questions[i].question + '</h2>');

            for(let j = 0; j < questions[i].answers.length; j++) {

              card.append(
                  "  <input type='radio' name=' question-" + ' ' + i + 
              "' value=' " +questions[i].answers[j]+"' > " +questions[i].answers[j])
            }
          }
      
          card.append('<button id="end">Submit</button>')
    },

        end: function() {
            let inputs = card.children("input:checked");
            for (var i = 0; i < inputs.length; i++) {
              if ($(inputs[i]).val() === questions[i].correctAnswer) {
                game.correct++;
              } else {
                game.incorrect++;
              }
            }
            this.result();
          },
        
          result: function() {
            clearInterval(timer);
        
            $("#quiz h2").remove();
        
            card.html("<h2>All Done!</h2>");
            card.append("<h3>Correct Answers: " + this.correct + "</h3>");
            card.append("<h3>Incorrect Answers: " + this.incorrect + "</h3>");
          }
        };
    $(document).on("click", "#start", function() {
        game.start();
      });
      
      $(document).on("click", "#end", function() {
        game.end();
      });
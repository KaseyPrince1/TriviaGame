let correct = 0;
let possible = 0;
//objects to create a question with options and answers creating an array of objects 
let questions = [
{
    question : "In what year did American women win the right to vote?",
    options:{
        a       : "1897",
        b       : "1920",
        c       : "1932",
        },
    Answer  : "b",
}
,
{
    question : "In 1932, Amelia Earhart was the first woman to:",
    options:{
        a       : "Fly a plane",
        b       : "Fly solo across the Atlantic",
        c       : "Join the AirForce",
        },
    Answer  : "b",
}
,
{
    question : "Who was the first American woman to win the Nobel Peace Prize?",
    options:{
    a       : "Jane Addams",
    b       : "Jody Williams",
    c       : "Oprah Winfrey",
    },
    Answer  : "a",
}
,
{
    question : "What was the first state to allow women to vote?",
    options:{
        a       : "Wyoming",
        b       : "Utah",
        c       : "Washington",
        },
    Answer  : "a",
}];

//As one of the first leaders for women's rights, who was the first woman pictured on a US coin in circulation? Susan B. Anthony;
function displayQuestions(){
    let output=[];
    let options;
   for(let i=0; i<questions.length; i++){
        $("#container").append("<div>" + questions.length + "<div>");
        //for(let i=0; i<options.length; i++){
         //   answers.push(
          //  )
       // }
    }
//}
displayQuestions();

setTimeout(timeIsUp, 1000 * 90);

function timeIsUp() {
  alert("Whoops, you are out of time!");
}

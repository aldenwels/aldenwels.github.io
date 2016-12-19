var correctAnswers = ["a","b","c","a","a"];

function checkAnswers(){
  $(".results").empty();
  var correctAmount = 0;
  for(var i = 0; i < correctAnswers.length; i++){
    var question = ".question" + i;
    var ans = ".answers" + i + " > input";
    console.log(ans);


    var correct = false;
    $(ans).each(function(){
        if($(this).val() == correctAnswers[i] && $(this).is(":checked")){
          correctAmount++;
          correct = true;
        }
    });



    if(correct ==  true){
      $(".results").append("<li> Answer to question " + (i + 1) + " is correct!</li>");
    }
    else
      $(".results").append("<li> Answer to question " + (i + 1) + " is false!</li>");

      correct = false; 
  }
  $(".results").append("<li> Your score is " + (correctAmount/correctAnswers.length).toFixed(2) * 100 + "% </li>");
}
//front-end logic
function chooseTrack(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input) {
 var cScore = question1Input*(-2) + question2Input*3 + question3Input*2 + question4Input + question5Input*2 + question6Input*(-2);
 var jScore =  question1Input*2 + question2Input*(-1) + question3Input*2 + question4Input*(-3) + question5Input*3 + question6Input;
 var rubyScore = question1Input*3 + question2Input*(-2) + question3Input*(-2) + question4Input*3 + question5Input*(-2) + question6Input*3;
 console.log(cScore)
 console.log(jScore)
 console.log(rubyScore)
  if (cScore>jScore && cScore>rubyScore) {
    return "c";
  }
  if (jScore>cScore && jScore>rubyScore) {
    return "java";
  }
  if (rubyScore>cScore && rubyScore>jScore) {
    return "ruby";
  }
  else {
    return "try them all out";
  }
}














//back-end logic

$(document).ready(function() {
  $("#mainForm").submit(function(event) {
  event.preventDefault();
  var question1Input = parseInt($("#question1").val());
  var question2Input = parseInt($("#question2").val());
  var question3Input = parseInt($("#question3").val());
  var question4Input = parseInt($("#question4").val());
  var question5Input = parseInt($("#question5").val());
  var question6Input = parseInt($("#question6").val());
  var userName = $("input#userName").val();

var winner = chooseTrack(question1Input, question2Input, question3Input, question4Input, question5Input, question6Input);

  $("#recommendation .card").hide();

  if (winner === "c") {
    $("#cSharp").show();
  }
  if (winner === "java") {
    $("#java").show();
  }
  if (winner === "ruby") {
    $("#ruby").show();
  }
  if (winner === "try them all out") {
    $("#tryThemAll").show();
  }


  console.log(winner)
  $(".userNameAnswer").text(userName);

  })
})

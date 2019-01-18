//front-end logic
function chooseTrack(question1Input, question2Input, question3Input) {
 var cScore = question1Input + question2Input + question3Input;
 var jScore =  question1Input + question2Input + question3Input;
 var rubyScore = question1Input + question2Input + question3Input;
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
  var userName = $("input#userName").val();

var winner = chooseTrack(question1Input, question2Input, question3Input);

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

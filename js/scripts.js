//front-end logic
//function chooseTrack(a,b,c,)
//  return

//  var javaScore =
//  var rubyScore =















//back-end logic

$(document).ready(function() {
  $("#mainForm").submit(function(event) {
  event.preventDefault();
  var question1Input = parseInt($("#question1").val());
  var question2Input = parseInt($("#question2").val());
  var question3Input = parseInt($("#question3").val());
  var userName = $("input#userName").val();
  console.log(userName)
  $(".userNameAnswer").text(userName);
  $("#recommendation").show();
  })
})

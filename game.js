$( document ).ready(function() {
  $(window).on("keyup", function(e) {
  var code = e.keyCode
  console.log(code)
  if (code === 81) {
    var active = $("#player1_race").children(".active");
    active.next().addClass('active');
    active.removeClass('active');
    if ($('#finishline1').hasClass('active')) {
      alert('Player 1 Wins!');
      location.reload();
    }
  }
  else if (code === 80) {
    var active = $('#player2_race').children(".active");
    active.next().addClass('active');
    active.removeClass('active');
    if ($('#finishline2').hasClass('active')) {
    alert('Player 2 Wins!');
    location.reload();
    }
  }
  });
});

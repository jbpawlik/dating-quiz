$(document).ready(function() {
  $("form#demographics").submit(function(event) {
    event.preventDefault();
    const name = $("input#name").val();
    const gender = $("select#gender").val();
    const age = parseInt($("input#age").val());

    let match = '';

    if (gender === 'male' && age > 21 ) {
      match = (' George Washington'); 
    } else if (gender === 'female' && age < 21) {
      match = (' Susan B Anthony');
    } else if (gender === 'non-binary')
      match = (' Gandhi');   
    
    $("#match").text(match);
    $("#celebrity").show();
    });
    
  });
document.getElementById("output").style.display = "none";
document.getElementById("input").style.display = "none";

document.getElementById("comienzo").addEventListener("click", (e)=> {
  document.getElementById("output").style.display = "block";
  document.getElementById("input").style.display = "block";
  let y = document.getElementsByClassName("x");
  let i;
  for (i = 0; i < y.length; i++) {
      y[i].style.display = 'none';
  }

  
})

var questionNum = 0;													// keep count of question, used for IF condition.
var question = '<h4>Hola, cómo te llamas?</h4>';				  // first question

var output = document.getElementById('output');				// store id="output" in output variable
output.innerHTML = question;													// ouput first question

function bot() { 
    var input = document.getElementById("input").value;
    console.log(input);

    if (questionNum == 0) {
    output.innerHTML = '<h4>Hola ' + input + ', yo soy Mary, la encargada de reclutamiento y voy a entrevistarte.</h4>';// output response
    document.getElementById("input").value = "";   		// clear text box
    question = '<h4>Lista?</h4>';			    	// load next question		
    setTimeout(timedQuestion, 5000);									// output next question after 2sec delay
    }

    else if (questionNum == 1) {
    output.innerHTML = '<h4>¿A qué cargo estás postulando?</h4>';
    document.getElementById("input").value = "";   
    question = '<h4>¿Cuáles son tus habilidades técnicas?</h4>';					      	
    setTimeout(timedQuestion, 8000);
    }   

    else if (questionNum == 2) {
      output.innerHTML = '<h4>¿manejas algún idioma además del español?</h4>';
      document.getElementById("input").value = "";   
      question = '<h4>¿Tienes experiencia en el cargo? Cuánta?</h4>';					      	
      setTimeout(timedQuestion, 7000);
      }   

    else if (questionNum == 3) {
      output.innerHTML = '<h4>¿Por qué crees que eres la indicada para el cargo?</h4>';
      document.getElementById("input").value = "";   
      question = '<h4>¿cuál es tu disponibilidad para el cargo?</h4>';					      	
      setTimeout(timedQuestion, 10000);
      }   

      else if (questionNum == 4) {
        output.innerHTML = '<h4>¿tienes inconvenientes para el traslado a nuestras oficinas?</h4>';
        document.getElementById("input").value = "";   
        question = '<h4>¿cuál es tu pretención de renta?</h4>';					      	
        setTimeout(timedQuestion, 7000);
        }   

        else if (questionNum == 5) {
          output.innerHTML = '<h4>Ya hemos acabado las preguntas. Puedes relajarte!</h4>';
          document.getElementById("input").value = "";   
          question = '<h4>Te mantendré al tanto de tu postulación. Saludos.</h4>';					      	
          setTimeout(timedQuestion, 5000);
          }   
}

function timedQuestion() {
    output.innerHTML = question;
}

//push enter key (using jquery), to run bot function.
$(document).keypress(function(e) {
  if (e.which == 13) {
    bot();																						// run bot function when enter key pressed
    questionNum++;																		// increase questionNum count by 1
  }
});

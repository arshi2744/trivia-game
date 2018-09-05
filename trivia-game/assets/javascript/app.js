var panel = $("#play-area");

$(document).on("click", "#start", function(event){
  game.start();
});

$(document).on("click", "#done", function(event){
  game.done();
});

var questions = [{
	question: "Who is the strongest?",
	choices: ["Superman", "The Terminator", "Waluigi, obviously" ],
	correctAnswer: "Waluigi, obviously"

}, {	

	question: "What is the best site ever created?",
	choices: ["SitePoint", "Simple Steps Code", "Trick question; they're both the best" ],
	correctAnswer: "Trick question; they're both the best"

}, {

	question: "Where is Waldo really?",
	choices: ["Antarctica", "Exploring the Pacific Ocean", "Sitting in a tree", "Minding his own business, so stop asking"],
	correctAnswer: "Minding his own business, so stop asking"

}, {

	question: "Who was the bass player for The Grateful Dead?",
	choices: ["Phil Lesh", "Bob Weir", "Bill Kreutzmann", "Pigpen"],
	correctAnswer: "Phil Lesh"

}, {

	question: "Who was NOT in Pink Floyd?",
	choices: ["Roger Waters", "Syd Barrett", "Roger Daltrey", "David Gilmour"],
	correctAnswer: "Roger Daltrey"

}];

var game = {
	correct: 0,
	incorrect: 0,
	counter: 60,

  countdown: function() {
  	game.counter--;
  	$("#counter-number").html(game.counter);

  	if (game.counter === 0) {
  		alert("TIME'S UP");
  		game.done();

  	}
  },

  start: function() {
  	timer = setInterval(game.countdown, 2000);
  	$('#subcontainer').prepend('<h2>Time Remaining: <span id="counter-number">60</span> Seconds</h2>');
  	$("#start").remove();

  	for (var i = 0; i < questions.length; i++) {
      panel.append('<h2>' + questions[i].question + '</h2>');
      for (var j = 0; j < questions[i].choices.length; j++){
        panel.append('<input type="radio" name ="question' + '-' + i + '"value="' + questions[i].choices[j] + '">' + questions[i].choices[j]);
        }
  		}
  		panel.append("<button id='done'>DONE</button>");
      
  	},

  	done: function() {

  		$.each($("input[name='question-0']:checked"), function() {
  			if ($(this).val() == questions[0].correctAnswer) {
  				console.log(this);
  				  game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-1']:checked"), function() {
  			if ($(this).val() == questions[1].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-2']:checked"), function() {
  			if ($(this).val() == questions[2].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-3']:checked"), function() {
  			if ($(this).val() == questions[3].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});
  		$.each($("input[name='question-4']:checked"), function() {
  			if ($(this).val() == questions[4].correctAnswer) {
  				console.log(this);
  				game.correct++;
  			} else {
  				game.incorrect++;
  			}

  		});

  		this.results();
  	},


  	  results:function() {
  	  	clearInterval(timer);

  	  	$("#subcontainer h2").remove();
  	   panel.html("<h2>All Done!</h2>");
  	   panel.append("<h3>Correct Answers: " + this.correct + "</h3>");
  	   panel.append("<h3>Wrong Answers: " + this.incorrect + "</h3>");
  	   panel.append("<h3>Unanswered: " + (questions.length - (this.incorrect + this.correct)) + "</h3>");
  	  
  	  }

  };

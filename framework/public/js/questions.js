var questionHTML = {

		"mtpl": '../partials/multipleChoice.html',
		"shrt": '../partials/shortAnswer.html',
		"mtch": '../partials/matching.html',
		"othr": '../partials/other.html'
	};
function changeQuestionType(value, index){

			if (document.readyState == "complete"){
				//console.log(value, index)
				//console.log(questionHTML[value]);
				$(".ng-scope").eq(index).load(questionHTML[value]);
				setTimeout(function () {
					$(".ng-scope").eq(index).find(".question-type")[0].onchange = function () {
						//console.log(this.value);
						changeQuestionType(this.value,  index);
				}; //logic is fucked up
			}, 100);
		};

	};

(function() {


	// for (var i = 0; i < $(".question-type").length; i++){
	// 	console.log('hi');
	// 	console.log($(".question-type")[i]);
	// 	$(".question-type").eq(i).change(function() {
	// 		console.log("adsf");
	// 		changeQuestionType($(".question-type")[i].value, i + 2);
	// 		console.log($(".question-type")[i]);
	// 	});

	// 	console.log($(".questions-type"));
	// };
	document.onreadystatechange = function() {
		if (document.readyState == "complete") {
		for (var i = 0; i < document.getElementsByClassName("question-type").length; i++) {
		console.log("one");
		document.getElementsByClassName("question-type")[i].onchange = function() {
			//console.log(this.value);
			//console.log(i);
			changeQuestionType(this.value, i + 1); //logic is fucked up
		};
	}
	}}
})();
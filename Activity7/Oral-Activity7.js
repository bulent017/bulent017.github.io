var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) { return document.getElementById(id); };

window.onload = function () {
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
	$("add").onclick = addScore;
	$("name").focus();
};

function addScore()
{
	var name = $("name").value;
	var score = $("score").value;

	if(name == "" || score == "" || isNaN(score) || score < 0 || score > 100) {
		alert("You must enter a name and a valid score!!!!");
	} else {
		names.push(name);
		scores.push(Number(score));
		$("name").value = "";
		$("score").value = "";
		$("name").focus();
	}
}

function displayScores()
{
	var table = $("scores_table");
	table.innerHTML = "";

	for(var i = 0; i < names.length; i++) {
		var row = table.insertRow(i);
		var name = row.insertCell(0);
		var scoreOfName = row.insertCell(1);
		name.innerHTML = names[i];
		scoreOfName.innerHTML = scores[i];
	}
}



function displayResults()
{
    var average = 0;
    var maxScore = 0;
    var maxScoreName = "";
    
    for(var i = 0; i < scores.length; i++)
    {
        average = (average * i + scores[i]) / (i + 1);
        if(scores[i] > maxScore) {
            maxScore = scores[i];
            maxScoreName = names[i];
        }
    }
    
    var result = $("results");
    result.innerHTML = "<h2>Results</h2>";
    result.innerHTML += "<p>Average score is " + average.toFixed(2) + "</p>";
    result.innerHTML += "<p>High score is " + maxScoreName + " with a score of " + maxScore + "</p>";
}




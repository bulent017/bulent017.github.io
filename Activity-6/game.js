var button = document.getElementById("button");
var container = document.getElementById("container");
var count = 0;
var level = 1;
var timeout = 500;

button.addEventListener("mouseover", function() {
	var x = Math.random() * (container.clientWidth - button.offsetWidth);
	var y = Math.random() * (container.clientHeight - button.offsetHeight);
	button.style.marginLeft = x + "px";
	button.style.marginTop = y + "px";
});

button.addEventListener("click", function() {
	count++;
	if (count === 3) {
		if (level < 6) {
			var confirmation = confirm("You are the winner, You can go to next level " + level);
			if (confirmation) {
				count = 0;
				level++;
				timeout -= 100;
				if (level <= 5) {
					setTimeout(function() {
						button.click();
					}, timeout);
				} else {
					alert("You have completed the game!");
				}
			}
		} else {
			alert("You have completed the game!");
		}
	}
});

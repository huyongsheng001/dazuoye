window.onload = function() {
	var oBox = document.getElementById("box");
	var oList = document.getElementById("list");
	var oButton = document.getElementById("button");
	var aA = oButton.getElementsByTagName("a");
	var next = document.getElementById("next");
	var prev = document.getElementById("prev");

	oList.style.left = "-650px";

	var index = 0;
	var isTrue = false;

	var tag = null;

	tag = setInterval(goTo, 2000);
	oBox.onmouseover = function() {
		next.style.display = "block";
		prev.style.display = "block";
		clearInterval(tag);
	};
	oBox.onmouseout = function() {
		next.style.display = "none";
		prev.style.display = "none";
		tag = setInterval(goTo, 2000);
	};

	next.onclick = function() {
		if (isTrue == false) {
			animate(-650);
			index++;
			if (index > 4) {
				index = 0;
			}
			color(index);
		}
	};
	prev.onclick = function() {
		if (isTrue == false) {
			animate(650);
			index--;
			if (index < 0) {
				index = 4;
			}
			color(index);
		}
	};

	for (var i = 0; i < aA.length; i++) {
		aA[i].onclick = function() {
			if (isTrue == false) {
				var myIndex = this.getAttribute("index");
				color(myIndex);
				var offset = -650 * (myIndex - index);
				animate(offset);
				index = myIndex;
			}
		};
	}

	function color(index) {
		for (var i = 0; i < aA.length; i++) {
			if (aA[i].className == "cur") {
				aA[i].className = "";
				break;
			}
		}
		aA[index].className = "cur";
	}

	function animate(offset) {
		isTrue = true;
		var newLeft = parseInt(oList.style.left) + offset;
		var time = 500;
		var interval = 10;
		var speed = offset / (time / interval);
		go();

		function go() {
			if (speed > 0 && parseInt(oList.style.left) < newLeft || speed < 0 && parseInt(oList.style.left) >
				newLeft) {
				oList.style.left = parseInt(oList.style.left) + speed + "px";
				setTimeout(go, interval);
			} else {
				isTrue = false;
				//oList.style.left = newLeft + "px";
				if (newLeft < -3000) {
					oList.style.left = "-650px";
				}
				if (newLeft > -650) {
					oList.style.left = "-3000px";
				}
			}
		}
	}

	function goTo() {
		if (isTrue == false) {
			animate(-650);
			index++;
			if (index > 4) {
				index = 0;
			}
			color(index);
		}
	}
}

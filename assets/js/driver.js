var selectColor = "red";
var unselectColor = "black";
var active = true;

var control1 = document.getElementById("knob1");
var control2 = document.getElementById("knob2");
var topImg = document.getElementById("img-2");

function swapimage()
{
	if(active)
	{

		control2.style.borderColor = selectColor;
		control1.style.borderColor = unselectColor;
		topImg.style.visibility = 'hidden';
		active = false;
	}
	else
	{
		control2.style.borderColor = unselectColor;
		control1.style.borderColor = selectColor;
		topImg.style.visibility = 'visible';
		active = true;

	}
}
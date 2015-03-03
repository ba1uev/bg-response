var x, y;

function getWindowSize(){
	x = $(document).width();
	y = $(document).height();
	return {
		xx: x,
		yy: y
	};
};

$(window).on('load resize', getWindowSize);

var getWindow = getWindowSize();
var centerX = Math.ceil(getWindow.xx/2);
var centerY = Math.ceil(getWindow.yy/2);


var centerXPos, centerYPos;
var center = $('#center');
centerXPos = centerX - parseInt(center.css('width'))/2;
centerYPos = centerY - parseInt(center.css('height'))/2;
center.css({'top' : centerYPos, 'left' : centerXPos});




var test = $('#test');
var l;
var cont = $('#cont');
var mousePosBar = document.getElementById('mouse-xy');
var centerDistBar = document.getElementById('center-dist');
var bgPosBar = document.getElementById('bg-pos')
var directionX = 1;
var directionY = 1;


var bgScale = 1;

var bgWidth = Math.ceil(getWindow.xx + getWindow.xx * bgScale);
var bgHeight = Math.ceil(getWindow.yy + getWindow.yy * bgScale);

var bgTop = -Math.ceil((bgHeight - getWindow.yy)/2);
var bgLeft = -Math.ceil((bgWidth - getWindow.xx)/2);


cont.css({'width': bgWidth,
		  'height': bgHeight,
		  'top': bgTop,
		  'left': bgLeft});


//----------- generate +++ bg ------------



//----------------------------------------


var vector = [];
var bgPosTop;
var bgPosLeft;

document.onmousemove = function(e){
	e = e || window.event;
	vector[0] = e.clientX-centerX;
	vector[1] = e.clientY-centerY;

	mousePosBar.value = e.clientX + ' * ' + e.clientY;
	centerDistBar.value = vector[0]+' / '+vector[1];

	bgPosTop = parseInt(cont.css('top'));
	bgPosLeft = parseInt(cont.css('left'));
	bgPosBar.value = bgPosTop+' / '+bgPosLeft;

	cont.css('top', bgTop - vector[1]/2);
	cont.css('left', bgLeft - vector[0]/2);
}









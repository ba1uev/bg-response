var x, y;

function getWindowSize(){
	x = $(document).width();
	y = $(document).height();
	$('#cont').html(x + ', ' + y);
	return {
		xx: x,
		yy: y
	};
};

$(window).on('load resize', getWindowSize);

var gett = getWindowSize();
var centerX = Math.ceil(gett.xx/2);
var centerY = Math.ceil(gett.yy/2);


var centerXPos, centerYPos;
var center = $('#center');
centerXPos = centerX - parseInt(center.css('width'))/2;
centerYPos = centerY - parseInt(center.css('height'))/2;
center.css({'top' : centerYPos, 'left' : centerXPos});



// track mouse cursor

var test = $('#test');
var l;
var cont = $('#cont');
var mousePosBar = document.getElementById('mouse-xy');
var centerDistBar = document.getElementById('center-dist');
var directionX = 1;
var directionY = 1;


// document.onmousemove = function(e){
// 	e = e || window.event;
// 	l = Math.ceil(Math.sqrt(Math.pow(e.clientX-centerX, 2) + Math.pow(e.clientY-centerY, 2)));

// 	if (e.clientX-centerX < 0) {
// 		directionX = -1;
// 	}else {
// 		directionX = 1;
// 	};

// 	if (e.clientY-centerY < 0) {
// 		directionY = -1;
// 	}else {
// 		directionY = 1;
// 	};

// 	mousePosBar.value = e.clientX + ' * ' + e.clientY;
// 	centerDistBar.value = l;
// 	// test.offset({top: l/2, left: l/2});
// 	// test.css({'top':l/2,'left':l/2});
// 	cont.css('top', function(i,val){return val =+ -directionY*l/4});
// 	cont.css('left', function(i,val){return val =+ -directionX*l/4});
// }
var vector = [];
document.onmousemove = function(e){
	e = e || window.event;
	// l = Math.ceil(Math.sqrt(Math.pow(e.clientX-centerX, 2) + Math.pow(e.clientY-centerY, 2)));
	vector[0] = e.clientX-centerX;
	vector[1] = e.clientY-centerY;

	mousePosBar.value = e.clientX + ' * ' + e.clientY;
	centerDistBar.value = vector[0]+' / '+vector[1];

	cont.css('top', function(i,val){return val =+ -vector[1]/4});
	cont.css('left', function(i,val){return val =+ -vector[0]/4});
}


// ----- ------ ----- ----- ----- -----









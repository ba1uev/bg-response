// var x, y;

// function getWindowSize(){
// 	x = $(document).width();
// 	y = $(document).height();
// 	return {
// 		xx: x,
// 		yy: y
// 	};
// };

// $(window).on('load resize', getWindowSize);

//-------- UI -------
var mousePosBar = document.getElementById('mouse-xy');
var centerDistBar = document.getElementById('center-dist');
var bgPosBar = document.getElementById('bg-pos')


//-------- input --------
var layScale = .6;







// ----------------------------------------

var cont = $('#container');
var lay = $('#lay');

var contWidth = parseInt(cont.css('width'));
var contHeight = parseInt(cont.css('height'));
var contTop = parseInt(cont.offset().top);
var contLeft = parseInt(cont.offset().left);

// alert(contTop + ', ' + contLeft);

var centerX = Math.ceil(contWidth/2) + contLeft;
var centerY = Math.ceil(contHeight/2) + contTop;


//---------- center point----------
var centerXPos, centerYPos;
var center = $('#center');
centerXPos = centerX - contLeft - parseInt(center.css('width'))/2;
centerYPos = centerY - contTop - parseInt(center.css('height'))/2;
center.css({'top' : centerYPos, 'left' : centerXPos});
//----------------------------------------

// alert(centerX + ' ' + centerY);

var layWidth = Math.ceil(contWidth + contWidth * layScale);
var layHeight = Math.ceil(contHeight + contHeight * layScale);

var layTop = -Math.ceil((layHeight - contHeight)/2);
var layLeft = -Math.ceil((layWidth - contWidth)/2);


lay.css({'width': layWidth,
		  'height': layHeight,
		  'top': layTop,
		  'left': layLeft
		});


//----------- generate +++ bg ------------

for (var i=0; i <= 4242; i++){
	var elem = $('<div>').attr('class', 'wow');
	elem.html('+');
	$(elem).appendTo(lay);
};

//----------------------------------------


var vector = [];
// var bgPosTop;
// var bgPosLeft;

document.onmousemove = function(e){
	e = e || window.event;
	vector[0] = e.clientX-centerX;
	vector[1] = e.clientY-centerY;

	mousePosBar.value = e.clientX + ' * ' + e.clientY;
	centerDistBar.value = vector[0]+' / '+vector[1];

	// bgPosTop = parseInt(lay.css('top'));
	// bgPosLeft = parseInt(lay.css('left'));
	// bgPosBar.value = bgPosTop+' / '+bgPosLeft;

	lay.css('top', layTop - vector[1]/5);
	lay.css('left', layLeft - vector[0]/5);
}









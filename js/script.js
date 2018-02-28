// CREATE BALLS AND THEM COLORS WITH BUTTON
// I use JS because random function of SASS doesn't work
$clic = false;
$cyan = '#82ccdd';
$magenta = '#b71540';
$yellow = '#f6b93b';
$black = '#000'
$colors = [$cyan, $magenta, $yellow, $black];

$(".btn-generator").click(function(){
	function backgroundColorBall(array){
		$minNumber = 0;
	    $maxNumber = array.length - 1;
	    $randomNumber = Math.floor(Math.random() * ($maxNumber + 1) + $minNumber);
	    $color = array[$randomNumber];
	    return $color;
	}
	$color = backgroundColorBall($colors);
	$clic = true;
	if($clic == true){
		$('.balls-container').prepend('<div class="ball" dataBg="' + $color + '" ></div>');
		$clic = false;
		moveBall($color);
		addPoint($color);
	}
})


// CREATE ZONES
$i = 0;
$length = $colors.length;
while ($i < $length) {
	$('.balls-container').append('<div class="end" dataBg="' + $colors[$i] + '" ><span data-point="0">0</span></div>');
	$i++;
}


// MOVE BALLS
function moveBall($color){
	$widthZone = $('.end').width();
	$heightZone = $('.end').height();
	$widthBall = $('.ball').width();
	$positionLeft = $('.end[dataBg="' + $color + '"]').position().left + ($widthZone/2) - ($widthBall/2) + "px";
	$positionTop = $('.end[dataBg="' + $color + '"]').position().top + ($heightZone/2) - ($widthBall/2) + "px";
	$('.ball[dataBg="' + $color + '"]').animate({left:$positionLeft, top:$positionTop}, 1000);
}


// ADD POINTS TO ZONES
function addPoint($color){
	$span = $('.end[dataBg="' + $color + '"] span');
	$value = $('.end[dataBg="' + $color + '"] span[data-point]').data("point");
	$more = $value + 1;
	$span.data("point",$more);
	$span.html($more);
}
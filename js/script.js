// VARIABLES
$clic = false;
$cyan = '#82ccdd';
$magenta = '#b71540';
$yellow = '#f6b93b';
$black = '#000';
$colors = [$cyan, $magenta, $yellow, $black];
$stop = false;
$finalScore = 5;


// CREATE BALLS AND HAVE FUN
$(".btn-generator").click(function(){
	if($stop!=true){
		$color = backgroundColorBall($colors);
		$clic = true;
		if($clic == true){
			$('.balls-container').prepend('<div class="ball" dataBg="' + $color + '" ></div>');
			$clic = false;
			moveBall($color);
			addPoint($color);
			victory($color);
		}
	}else if($stop==true){
		resetGame();
	}
})


// GENERATE BALLS COLORS WITH BUTTON
function backgroundColorBall(array){
	$minNumber = 0;
    $maxNumber = array.length - 1;
    $randomNumber = Math.floor(Math.random() * ($maxNumber + 1) + $minNumber);
    $color = array[$randomNumber];
    return $color;
}


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


// SHOW WHO WIN
function victory($color){
	$value = $('.end[dataBg="' + $color + '"] span[data-point]').data("point");
	if($value==$finalScore){
		$('.victory-window').css({'background-color':$color}).append('<span>This color win !</span>');
		$stop = true;
		$('button').html('Reset');
	}
}


// RESET GAME
function resetGame(){
	$span = $('.end[dataBg] span').data("point", 0).html(0);
	$('.victory-window').html('').removeAttr("style");
	$('button').html('Generate');
	$('.ball').remove();
	$stop = false;
}
// CREATE BALLS AND THEM COLORS WITH BUTTON
// I use JS because random function of SASS doesn't work
$clic = false;
$blue = '#3498db';
$red = 'red';
$green = 'green';
$black = '#000'
$colors = [$blue, $red, $green, $black];

$(".btn-generator").click(function(){
	function backgroundColorBall(array){
		var minNumber = 0;
	    var maxNumber = array.length - 1;
	    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	    var color = array[randomNumber];
	    return color;
	}
	$color = backgroundColorBall($colors);
	$clic = true;
	if($clic == true){
		$('.balls-container').prepend('<div class="ball" style="background-color:' + $color + ';" ></div>');
		$clic = false;
	}
})

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
		var minNumber = 0;
	    var maxNumber = array.length - 1;
	    var randomNumber = Math.floor(Math.random() * (maxNumber + 1) + minNumber);
	    var color = array[randomNumber];
	    return color;
	}
	$color = backgroundColorBall($colors);
	$clic = true;
	if($clic == true){
		$('.balls-container').prepend('<div class="ball" dataBg="' + $color + '" ></div>');
		$clic = false;
	}
})


// CREATE ZONES
$i = 0;
$length = $colors.length;
while ($i < $length) {
	$('.balls-container').append('<div class="end" dataBg="' + $colors[$i] + '" ></div>');
	$i++;
}
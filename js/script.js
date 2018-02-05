// CREATE BALLS WITH BUTTON
$clic = false;

$(".btn-generator").click(function(){
	$clic = true;
	if($clic == true){
		$('.balls-container').prepend('<div class="ball"></div>')
		$clic = false;
	}
})

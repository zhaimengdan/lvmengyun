$(function() {
	
	$('.item .close').click(function() {
		$('.item .close').attr('class', "close")
		$(this).attr('class', "close openn")
		
		
		if ($('.item').find('.i-item').eq($(this).index()).css('display') == 'none') {
			$('.item').find('.i-item').hide()
			$('.item').find('.i-item').eq($(this).index()).show()
			// console.log(2)
			
		} else {
			$(this).attr('class', "close")
			$('.item').find('.i-item').hide()
		}
	})







})

$(function(){
	// 导航栏点击语言，出现下拉框效果
		$('.r1').find('.yuyan').on('click', function() {
			if ($('.r1-list').css('display') == 'none') {
				$('.r1').find('.r1-list').show()
			} else {
				$('.r1').find('.r1-list').hide()
			}
		})
})
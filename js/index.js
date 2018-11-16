$(function() {


// banner 轮播图

	var timer=null;
	var now=0;
	$(".ol-list li").on('click',function(){
		$(".ol-list li").attr('class','')
		$(this).attr('class','active')
		var index=$(this).index();
		now=index;
		$('.banner ul').animate({
			"left":-now*($(".banner ul li").eq(0).width())
		})
		
	})
	
	
	var dong=function(){
		now++;
		if(now>($(".ol-list li").length-1)){
			now=0;
		}
		$(".ol-list li").eq(now).trigger('click')
	}
	timer=setInterval(dong,2000)
	
	$('.banner-box').mousemove(function(){
		clearInterval(timer)
	})
	$('.banner-box').mouseout(function(){
		timer=setInterval(dong,2000)
	})
	
	$('.arr_ll').click(function(){
		now--;
		$(".ol-list li").attr('class','')
		$(".ol-list li").eq(now).attr('class','active')
		if(now<0){
			now=$(".banner ul li").length-1
			$(".ol-list li").eq(now).attr('class','active')
		}
		$('.banner ul').animate({
			"left":-now*($(".banner ul li").eq(0).width())
		})
 	})
	$('.arr_rr').click(function(){
		now++;
		$(".ol-list li").attr('class','')
		$(".ol-list li").eq(now).attr('class','active')
		if(now>($(".banner ul li").length-1)){
			now=0;
			$(".ol-list li").eq(now).attr('class','active')
		}
		$('.banner ul').animate({
			"left":-now*($(".banner ul li").eq(0).width())
		})
	})

})
// banner 轮播图结束

// 客服、微博、微信
	$('.corpation ul li').hover(function(){
		// $('.mormal2').show()
		$(this).find('.mormal2').show()
	},function(){
		$('.mormal2').hide()
	})
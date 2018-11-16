$(function() {
	// 全屏轮播
	var oScreenBanner = document.getElementsByClassName('big')[0];
	var oAllScreen = document.getElementsByClassName('wrap')[0];
	var arrScreen = document.getElementsByClassName('ping-item');
	var screenW, screenH;
	var page = 0;

	function resize() {
		//获取屏幕宽高
		screenW = document.documentElement.clientWidth;
		screenH = document.documentElement.clientHeight;
		//设置宽高  总轮播图  大盒子  每一屏     //轮播动的是大盒子
		oAllScreen.style.width = oScreenBanner.style.width = screenW + 'px'; //总轮播图的宽
		oScreenBanner.style.height = screenH + 'px'; //大盒子的高
		oAllScreen.style.height = screenH * arrScreen.length + 'px'; //总轮播图的高

		for (var i = 0; i < arrScreen.length; i++) {
			arrScreen[i].style.width = screenW + 'px';
			arrScreen[i].style.height = screenH + 'px';
		}
		oAllScreen.style.top = -page * screenH + 'px';
	}
	resize()
	window.onresize = resize; //onresize 事件会在窗口或框架被调整大小时发生。

	var inRuning = false;
	//当inRuning为true
	//当inRuning为false
	function scrollUp() {
		if (!inRuning) {
			inRuning = true;
			//设置一个定时器 当1S过后 滚轮可以继续使用
			setTimeout(function() {
				inRuning = false
			}, 1000);
			if (page > 0) {
				page--;
				$(".big-btn li").eq(page).trigger("click")
				oAllScreen.style.top = -page * screenH + 'px';
			}
		}
	}

	function scrollDown() {
		if (!inRuning) {
			inRuning = true;
			setTimeout(function() {
				inRuning = false;
			}, 1000);
			if (page < arrScreen.length - 1) {
				page++;
				$(".big-btn li").eq(page).trigger("click")
				oAllScreen.style.top = -page * screenH + 'px';
			}
		}
	}
	addEvent(window, 'mousewheel', mouseWheel);
	addEvent(window, 'DOMMouseScroll', mouseWheel)
	//滚轮事件函数
	function mouseWheel(ev) {
		var oEvent = ev || event;
		if (oEvent.detail) {
			if (oEvent.detail > 0) {
				scrollDown()
			} else {
				scrollUp();
			}
			console.log(oEvent.detail)
		} else if (oEvent.wheelDelta) {
			if (oEvent.wheelDelta > 0) {
				scrollUp();
			} else {
				scrollDown();
			}
		}

	}

	function addEvent(ele, ev, fn) {
		if (ele.attachEvent) {
			ele.attachEvent('on' + ev, fn)
		} else {
			ele.addEventListener(ev, fn);
		}
	}

	// banner图点击按钮

	$(function() {
		$(".big-btn li").click(function() {
			//						var tmp= $(this).index()
			$(this).attr("class", "inon").siblings().attr("class", "")
			$(".big-btn li").find("span").hide()
			$(this).find("span").show()
			$(".wrap").css("top", ($(this).index()) * (-100) + '%')
		})
	})



	// 导航栏下拉
	// var stop=true;

	$('.only').hover(function() {
		$('.xiala').slideDown(1000)
	}, function() {
		$('.xiala').slideUp(1000)
	})
	$('.xiala-list li').hover(function() {
		$(this).find('.zhai').show()
	}, function() {
		$('.zhai').hide()
	})


	// banner 图轮播

	$(function() {
		var timer = null
		var now = 0
		$(".banner-box").append($(".banner-box").html())
		$(".banner-box").css("width", $(".banner-box li").size() * $(".banner-box li").eq(0).width())
		$(".ban-btn li").click(function() {
			$(".ban-btn li").attr("class", "")
			$(this).attr("class", "active")
			now = $(this).index()
			$(".banner-box").animate({
				"left": -now * $(".banner-box li").eq(0).width()
			})
		})

		//							alert($(".banner-box").width()/2)
		function move() {
			if (parseInt($(".banner-box").css("left")) < -($(".banner-box").width() / 2 - 2 * $(".banner-box li").eq(0)
					.width())) {
				$(".banner-box").css("left", 0)
				now = 0
				$(".banner-box").animate({
					"left": -now * ($(".banner-box li").eq(0).width())
				})
				$(".ban-btn li").eq(now).trigger("click")

			} else {
				now++

				if (now > $(".banner-box li").length - 1) {
					now = 0
				}
				$(".banner-box").animate({
					"left": -now * ($(".banner-box li").eq(0).width())
				})
				$(".ban-btn li").eq(now).trigger("click")
			}
		}
		$(".banner-box").mouseover(function() {
			clearInterval(timer)
		})
		$(".banner-box").mouseout(function() {
			timer = setInterval(move, 2000)
		})
		timer = setInterval(move, 2000)
	})


	// 银行政府

	$(function() {
		$(".ping5-item").hover(function() {
			$(this).find('.pbg').fadeTo(800, 1)
			$(this).find('.pbg-2').css({
				"transform": "scale(1.1)"
			})
			$(this).find('.info').fadeIn(800)
		}, function() {
			$(this).find('.pbg').fadeTo(1000, 0)
			$(this).find('.pbg-2').css({
				"transform": "scale(1)"
			})
			$(this).find('.info').fadeOut(100)
		})
	})




	$(function() {
		$(".pinpai-item").hover(function() {
			$(this).find("img").hide()
			$(this).find(".item_text").show()
			$(this).css("background", "green")
		}, function() {
			$(this).find("img").show()
			$(this).find(".item_text").hide()
			$(this).css("background", "rgba(255, 255, 255, 0.45)")
		})
	})









})

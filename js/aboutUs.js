$(function() {
	function scroll_manage() {
		var oUl = $(".item4-list ul");
		var oLiWid = $(".item4-list ul li:eq(0)").width() + 22;
		var timer = null;
		var leB = $(".link_left");
		var riB = $(".link_right");

		if (oUl.find("li").size() < 8) {
			return false
		};

		function prevLeft() {
			if (!oUl.is(":animated")) {
				clearTimeout(timer);
				oUl.find("li:last").clone().prependTo(oUl);
				oUl.css("left", "-" + oLiWid + "px");
				oUl.animate({
					"left": "+=" + oLiWid + "px"
				}, 1000);
				oUl.find("li:last").remove();
				timer = setTimeout(nextLeft, 3000);
			};
		};

		function nextLeft() {
			if (!oUl.is(":animated")) {
				clearTimeout(timer);
				oUl.animate({
					"left": "-=" + oLiWid + "px"
				}, 1000, function() {
					$(this).css("left", "0px").find("li:first").appendTo($(this));
				});
				timer = setTimeout(nextLeft, 3000);
			};
		};


		leB.click(function() {
			prevLeft();
		});

		riB.click(function() {
			nextLeft();
		});

		timer = setTimeout(nextLeft, 3000);
		$(".item-text,.btnLeft,.btnRight").hover(function() {
			clearTimeout(timer);
		}, function() {
			timer = setTimeout(nextLeft, 3000);
		});
	}

	scroll_manage();

})

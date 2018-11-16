$(function() {
	$(".safe_faq .title .close").show();
	//$(".safe_faq .on .open").show();

	$(".safe_faq .title").click(function() {
		if ($(this).next(".content").is(":hidden")) {
			$(this).removeClass("on").addClass("on").siblings(".title").removeClass("on");
			$(this).find("span.open").show();
			$(this).find("span.close").hide();
			$(this).siblings(".title").find("span.open").hide();
			$(this).siblings(".title").find("span.close").show();
			$(this).next().show();
			$(this).next().siblings(".content").hide();
		} else {
			$(this).removeClass("on");
			$(this).find("span.open").hide();
			$(this).find("span.close").show();
			$(this).next().hide();
		}
	})
})

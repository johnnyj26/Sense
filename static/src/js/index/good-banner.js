(function(b, e) {
	var c = b.jQuery;
	
	var j = function() {
		c("#inbannertag").find("a[data-br=0]").addClass("current");
		c(".inbanner").find("div[data-br=0]").addClass("selected");
		alert(c(".inbanner").find("div[data-br=0]").attr("class"));
		c(".inbanner").find("div[data-br=0]").css("opacity", 1);
		c(".inbanner").find("div[data-br=0]").css("z-index", 20);
	};
	j();
	var k = null;
	var s = function(v) {
		c("#inbannertag").find("a[data-br]").removeClass("current");
		c("#inbannertag").find("a[data-br=" + v + "]").addClass("current");
		var t = c(".inbanner").find("div[data-br=" + v + "]");
		if (k != null) {
			clearInterval(k)
		}
		var w = 0;
		k = setInterval(function() {
					w += 0.05;
					t.css("opacity", w);
					c(".inbanner").find("div[data-br][data-br!=" + v + "]").each(
							function() {
								var x = c(this).css("opacity");
								x -= 0.05;
								if (x < 0) {
									x = 0
								}
								c(this).css("opacity", x)
							});
					if (w >= 1) {
						clearInterval(k);
						t.addClass("selected");
						c(".inbanner").find("div[data-br][data-br!=" + v + "]").removeClass("selected");
						t.css("z-index", "20");
						c(".inbanner").find("div[data-br][data-br!=" + v + "]").css("z-index", "10")
					}
				}, 50)
	};
	var ddd= setInterval(function() {
				var v = c("#inbannertag").find("a[data-br]").length;
				var w = c(".inbanner").find("div[data-br][class*=selected]").attr("data-br");
				var t = (parseInt(w, 10) + 1) % v;
				s(t)
			}, 5000);
	
	c("#inbannertag").delegate("a[data-br]", "click", function() {
				var t = c(this).attr("data-br");
				s(t);
				return false
			});
	
	$(".qby-banner-imgM").mouseenter(function(){
		clearInterval(ddd);
	}).mouseleave(function(){
		ddd= setInterval(function() {
			var v = c("#inbannertag").find("a[data-br]").length;
			var w = c(".inbanner").find("div[data-br][class*=selected]").attr("data-br");
			var t = (parseInt(w, 10) + 1) % v;
			s(t)
		}, 5000);
	});

})(window);
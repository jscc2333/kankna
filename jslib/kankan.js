// 搜索框输入时改变边框和文字
$(function(){
	$(".search :text").click(function(event) {
		/* Act on the event */
		$(this).css({
			"border":"1px solid #72BEE1",
			"background":"#F2E7E7"
		});
	}).mouseout(function(event) {
		/* Act on the event */
		$(this).css({
			"border":"1px solid black",
			"background":"#fbfbfb"
		});
	});
});

// 点击收藏或者记录出现下拉框
$(function(){
	var $hisDiv = $("<div>這是记录或收藏用的div</div>");
		$hisDiv.css({
			"position":"absolute",
			// "left":"-40%",
			"top":"150%",
			"width":"100px",
			"height":"100px",
			"border":"1px solid black",
			"background":"#E1E0E0",
			"z-index":"100"
		});
		// console.log($hisDiv);
	$("li .history").mouseenter(function(event) {
		/* Act on the event */
		// console.log($(this).parents("li").find("img").attr("src"));
		($hisDiv).insertAfter($(this));
	}).mouseleave(function(event) {
		/* Act on the event */
		$hisDiv.remove();
	});
});
// 下拉菜单
$(function(){
	jQuery(function(){
		$(".nav .super").superfish({
			animation:{height:"show"},
			delay:1200
		});
	});
});
// 横幅自动滚动
$(function(){
	var $imgrolls = $(".bannerImg li");
	// $imgrolls.css("opacity","0.7");
    var len  = $imgrolls.length;
	var index = 0;
	var adTimer = null;
	$imgrolls.mouseover(function(){
		index = $imgrolls.index(this);
		showImg(index);
	}).eq(0).mouseover();	
	//滑入 停止动画，滑出开始动画.
	$('.bannerImg').hover(function(){
			if(adTimer){ 
				clearInterval(adTimer);
			}
		 },function(){
			adTimer = setInterval(function(){
			    showImg(index);
				index++;
				if(index==len){index=0;}
			} , 2000);
	}).trigger("mouseleave");
});
function showImg(index){
	// console.log(index);
	$(".bannerImg").find("li").eq(index).fadeIn(300).siblings().stop(true,true).fadeOut();
}

$(function(){
	$(".videoTip,.rank a").hover(function(){
		$(this).css({
			"text-overflow":"clip",
			"white-space":"normal",
			"overflow":"visible",
			"z-index":"100"
		});
	},function(){
		$(this).css({
			"text-overflow":"ellipsisi",
			"overflow":"hidden",
			"white-space":"nowrap"
		});
	}).trigger("mouseout");
});
// 
$(function(){
	$(".videoContent img").each(function(){
		console.log($(this).index());
		$(this).parents(".rankTag").next("div").find("li").eq($(this).parents("li").index()).find("a").text($(this).attr("alt"));
	});

});

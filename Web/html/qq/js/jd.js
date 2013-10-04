$(function()
{
	initEvents();
});

function initEvents()
{

	$("a").hover(function() {
		$(this).css("color","rgb(200,0,0)");
	}, function() {
		$(this).css("color","rgb(51, 51, 51)");
	});
	$("#d1").hover(function() {
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #ccc");
		$(this).css("border-bottom","0px solid #ccc");
		$("#wzdh_xl").show();
	}, function() {
		$(this).css("background-color","rgb(248, 248, 248)");
		$(this).css("border","1px solid rgb(248, 248, 248)");
		$("#wzdh_xl").hide();
	});
	$("#d2").hover(function() {
		$(this).css("background-color","#fff");
		$(this).css("border","1px solid #ccc");
		$(this).css("border-bottom","0px solid #ccc");
		$("#khff_xl").show();
	}, function() {
		$(this).css("background-color","rgb(248, 248, 248)");
		$(this).css("border","1px solid rgb(248, 248, 248)");
		$("#khff_xl").hide();
	});
}
/* script.js 

$("ul.mainmenu li").children("ul").addClass("show");
*/
function display(event) {
/* $(event.currentTarget).children("ul").addClass("show");

	$(event.currentTarget).children("ul").show() 
	*/
	$(event.currentTarget).children("ul").slideDown("slow");
}
function hide(event) {
/*	$(event.currentTarget).children("ul").removeClass("show")
*/
	$(event.currentTarget).children("ul").hide();
}
$("ul.mainmenu li").hover(display,hide);
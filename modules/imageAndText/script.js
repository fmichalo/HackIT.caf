function eventimg(){
	$( document ).ready(function() {
	$( ".editImage" ).unbind( "click" );
	$( ".editImage" ).click(function() {
		var newURL= prompt('New image url','http://url.com/image.png');
		$(this).prev().attr("src",newURL);
	});

});};

eventimg();
var imgscript=true;
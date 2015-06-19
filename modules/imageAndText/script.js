$( document ).ready(function() {
	$( ".editImage" ).click(function() {
		var newURL= prompt('New image url','http://url.com/image.png');
		$(this).prev().attr("src",newURL);
	});

});

var imgscript=true;
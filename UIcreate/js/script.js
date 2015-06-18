
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append('<div class="well span8 tile">'+data+'</div>')}
	});

}
/*
function jsonToList(jsonname){

	$.getJSON( "../modules/listModules.json", function( data ) {
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push( "<li id='" + key + "'>" + val + "</li>" );
	  });
	 
	  $( "<ul/>", {
	    "class": "my-new-list",
	    html: items.join( "" )
	  }).appendTo( "#moduleSelect" );
	});

}
*/
$(function () {
    $(".grid").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span2 well placeholder tile',
        forceHelperSize: true,
        cancel: "p"
    });
});


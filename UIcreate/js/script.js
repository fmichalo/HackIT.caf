
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append('<div><span class="ui-icon ui-icon-arrowthick-2-n-s"></span>'+data+'</div>')}
	});

}

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

$("#content").sortable({
    //cancel: ".module",
    handle:".ui-icon-arrowthick-2-n-s"
});
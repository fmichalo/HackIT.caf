
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append('<div class="well span7 tile">'+data+'</div>')}
	});

}

function jsonToList(){

	

	$.getJSON( "../modules/listModules.json", function( data ) {
		
	  var items = [];
	  $.each( data, function( key, val ) {
	    items.push( "<li id='module" + key + "'>" + val + " <button class='linkAdd' id='"+ val+"'>Add</button></li>" );
	  });

	

	  $( "<ul/>", {
	    "class": "listModules",
	    html: items.join( "" )
	  }).appendTo( "#moduleSelect" );

	  $( ".linkAdd" ).click(function() {
	  	var idmodule = this.id;
		 importModule(idmodule);
		});
	
	});



}


$(function () {
    $(".sortable").sortable({
        tolerance: 'pointer',
        revert: 'invalid',
        placeholder: 'span7 well placeholder tile',
        forceHelperSize: true,
        cancel: "p, h2"
    });
});


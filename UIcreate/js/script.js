
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append('<div class="well span7 tile">'+data+'<button class="deleteButton">delete</button></div>')
		$( ".deleteButton" ).click(function() {
			$(this).parent().remove();
		});
	}
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
        cancel: "p, h2, form, button"
    });
});

function addAttendee(json) {

	$.ajax({
	type: "POST",
        //the url where you want to sent the userName and password to
        url: 'addAttendee',
        dataType: 'json',
        async: false,
        //json object to sent to the authentication url
        data: '{ "attendee" : '+ json+ '}',
        success: function () {

        alert("Thanks!"); 
        }}
    );

	// $.ajax({
	// 	type : "POST",
	// 	url : "addAttendee?json=" + json,
	// 	success : function(response) {
	// 	$("#subscribe").html("Inscription Done ! ");
	// }
	// });
}

$( document ).ready(function() {
	$( "#imgEdit" ).click(function() {
		var newURL= prompt('New banner url','http://url.com/image.png');
		console.log(newURL);
		$("#BannerImg").attr("src",newURL);
	});

});


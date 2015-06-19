
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


$( document ).ready(function(){
	$(".convert").click(fixhtml);
});


function sendwebsite(json){

	$.ajax({
	type: "POST",
	    //the url where you want to sent the userName and password to
	    url: 'addAttendee', ///////////////////////////////////// to define
	    dataType: 'json',
	    async: false,
	    //json object to sent to the authentication url
	    data:  json,
	    success: function () {

	    alert("website exported!"); 
	    }}
	);

}

function fixhtml(){
	/*$("div").removeClass("sortable");
	var body = $("body").html();
	node = $(body).clone();
	node.removeClass("ui-sortable");
	console.log(node);
	//node.getElementById("moduleSelect").remove()
	*/

	var $inputs = $("#infoForm :input");

	var cbody = $("body").clone();
	cbody.children("#content").removeClass("ui-sortable");
	cbody.children("#content").removeClass("sortable");
	cbody.find(".toremove").remove();
	cbody.find(".deleteButton").remove();

	var title = ""
	var items = [];
	$inputs.each(function(){
		if (this.name != "eventtitle"){
			items.push("<p>"+this.name+":"+this.value+"</p>");	
		}
		else{
			title=this.value;
		}
		
	});

	cbody.children("#moduleSelect").html("");
	cbody.children("")

	$( "<div/>", {
	"class": "infoDiv",
	html: items.join( "" )
	}).appendTo( cbody.children("#moduleSelect") );

	

	cbody.find("*[contenteditable=true]").attr("contenteditable", false);
	

	var jsonhtml =JSON.stringify({
		title: title,
		content : cbody.html()
	});
	sendwebsite(jsonhtml); 

}



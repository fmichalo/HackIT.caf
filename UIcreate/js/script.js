
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append(data)}
	});

}

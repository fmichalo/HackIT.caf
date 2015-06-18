
function importModule(moduleName){

	$.ajax({
		'url':'../modules/'+ moduleName +'/'+moduleName +'.html',
		'success':function(data){$('#content').append(data)}
	});

	// var xhr= new XMLHttpRequest();
	// xhr.open('GET', '../../modules/'+ moduleName +'/'+moduleName +'.html', true);
	// xhr.onreadystatechange= function() {
	//     if (this.readyState!==4) return;
	//     if (this.status!==200) return; // or whatever error handling you want
	//     document.getElementById('content').innerHTML= this.responseText;
	// };
	// xhr.send();
}
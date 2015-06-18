$('button').click(function(){
    var $div=$('div'), isEditable=$div.is('.editable');
    $('div').prop('contenteditable',!isEditable).toggleClass('editable')
})
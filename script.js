$(function() {

	$(document.body).bind('mouseup', function(e) {

		var selection;

		if(window.getSelection) {
			selection = window.getSelection();
		}

		else if (document.selection) {
			selection = document.selection.createRange();
		}

		selection.toString() !== '' && window.open("https://www.google.com/search?q= "+selection + " ");

	});


});
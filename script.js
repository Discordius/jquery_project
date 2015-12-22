$(document).ready(function(){
	for(var i=0; i<16;i++){
		$('#grid').append('<div class="column"></div>');
	}
	for(var i=0; i<16;i++){
		$('.column').append('<div class="element"></div>');
	}
	$('div > div > div').hover(function(){
		$(this).addClass('colored');
	});
	$('#clear').click(function(){
		$('#grid').html("");
		var number = prompt("what dimensions?");
		var grid = $('#grid');
		for(var i=0; i<number;i++){
			grid.append('<div class="column"></div>');
		}
		var columns = $('.column');
		for(var i=0; i<number;i++){
			columns.append('<div class="element"></div>');
		}
		$('div > div').hover(function(){
		$(this).addClass('colored');
	});
	});
});
$(document).ready(function () {
	$('pre').prepend('<a class="copy-button"><i class="copy outline icon"></i></a>');
	$('.copy-button').css({
		'position': 'relative',
		'float': 'right',
		'font-size': '15px',
		'cursor': 'pointer'
	});
	$('.copy-button').mousedown(function() {
		$(this).css('color', 'green');
		let text = $($(this).siblings('code')).text();
		console.log(text);
		let tmp = $('<textarea>');
		$('body').append(tmp);
		tmp.val(text).select();
		document.execCommand('copy');
		tmp.remove();
	});
	$('.copy-button').mouseup(function() {
		$(this).css('color', '#4183c4');
	});
});
$(document).ready(() => {
	$('pre').prepend('<a class="copy-button"><i class="copy outline icon"></i></a>');
	$('.copy-button').css({
		'position': 'relative',
		'float': 'right',
		'font-size': '15px',
		'cursor': 'pointer'
	});
	$('.copy-button').click(function () {
		let text = $($(this).siblings('code')).text();
		console.log(text);
		let tmp = $('<textarea>');
		$('body').append(tmp);
		tmp.val(text).select();
		document.execCommand('copy');
		tmp.remove();
	});
});
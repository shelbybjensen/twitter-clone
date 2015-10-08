$(document).ready(function(){
	$('#tweet-controls').hide();
	$('.tweet-compose').on('click', function() {
		$('#tweet-controls').show();
		$('.tweet-compose').css('height', '5em');
	})
	var maxLength = 140
	$('.tweet-compose').keyup(function(){
		var length = $('.tweet-compose').val().length;
		length = maxLength - length;
		$('#char-count').text(length);
	
		if (length < 10){
			$('#char-count').css('color', 'red');
		} else {
			$('#char-count').css('color', 'black');
		}
		if (length < 0){
			$('#tweet-submit').text('Disabled');
		} else {
			$('#tweet-submit').text('Tweet');
		}
	})
	$('#tweet-submit').on('click', function() {
		if ($('.tweet-compose').val().length !== 0) {
			var newTweet = $('.tweet:first').clone('withDataAndEvents');
			newTweet.find('.tweet-text').html($('.tweet-compose').val());
			$('#stream').prepend(newTweet);
		}
	})
	
});
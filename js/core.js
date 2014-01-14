
$(function () {
	$('.logo').animate({ top: 20 }, 1000, 'easeOutBounce');
	$('.footer').animate({ bottom: 0 }, 1000, 'easeOutBounce', function () {
		setTimeout(function () {
			$('.coming-soon').fadeIn(1000, function () {
				$(this).css('display', 'block');
			});
			setTimeout(function () {
				$('.twitter-timeline-wrapper, .calendar-wrapper').animate({ bottom: 150 }, 1000, 'easeOutQuint');
			}, 500);
		}, 300);
	});
})
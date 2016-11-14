$(document).ready(function(){
	$("#submit-message").click(function(){
		var inputName = $("#name");
		var inputEmail = $("#email");
		var inputSubject = $("#subject");
		var inputMessage = $("#message");
		
		var isValid = null;
		
		if (inputName.val().trim().length == 0
				|| inputEmail.val().trim().length == 0
				|| inputSubject.val().trim().length == 0
				|| inputMessage.val().trim().length == 0) {
			isValid = false;
		} else {
			isValid = true;
		}
		
		if (isValid) {
			alert("Message sent successfully!");
		} else {
			alert("Fill in all form fields!");
		}
	});
	
	$.easing.custom = function (x, t, b, c, d) {
		var s = 1.70158;
		if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
		return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
	}

	$(".scroll").click(function (event) {
		event.preventDefault();
		$('html,body').animate({
			scrollTop: $(this.hash).offset().top - 45
		}, {
			duration: 2000,	easing: 'custom'
		});
	});
	
	$(window).scroll(function() {
		if ($("body").scrollTop() > 50) {
			$("#back").addClass("active");
		} else {
			$("#back").removeClass("active");
		}
	});
});
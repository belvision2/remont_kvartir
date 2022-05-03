
; /* Start:"a:4:{s:4:"full";s:97:"/bitrix/templates/main/components/bitrix/form.result.new/send.review/script.min.js?15083955021057";s:6:"source";s:78:"/bitrix/templates/main/components/bitrix/form.result.new/send.review/script.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
$(document).ready(function(){$(".ratingStar").click(function(){var a=$(this).attr("data-raiting");$(".ratingStar").each(function(){if($(this).attr("data-raiting")<=a){$(this).attr("src","../img/form_star_act.png")}else{$(this).attr("src","../img/form_star.png")}});$("#reviewRaiting").val(a)});$(".es1_otzivy__form_bg__rek > img").click(function(){if($("#reviewRecomendate").val()>0){$("#reviewRecomendate").val(0);$(this).attr("src","../img/rek.png")}else{$("#reviewRecomendate").val(1);$(this).attr("src","../img/rek_act.png")}});$("form[name='send_review']").submit(function(a){$("form[name='send_review'] input, form[name='send_review'] textarea").each(function(){if($(this).attr("data-validation")=="required"){if(!$(this).val()){$(this).addClass("ERROR");a.preventDefault()}else{$(this).removeClass("ERROR")}}})})});function readURL(b){if(b.files&&b.files[0]){var a=new FileReader();a.onload=function(c){$("#blphoto").attr("src",c.target.result).addClass("active");$(".es1_otzivy__form_bg__form_photo").css("background","none")};a.readAsDataURL(b.files[0])}};
/* End */
;
; /* Start:"a:4:{s:4:"full";s:38:"/js/jquery.countdown.js?14737541053004";s:6:"source";s:23:"/js/jquery.countdown.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
/**
 * @name		jQuery Countdown Plugin
 * @author		Martin Angelov
 * @version 	1.0
 * @url			http://tutorialzine.com/2011/12/countdown-jquery/
 * @license		MIT License
 */

(function($){
	
	// Number of seconds in every time division
	var days	= 24*60*60,
		hours	= 60*60,
		minutes	= 60;
	
	// Creating the plugin
	$.fn.countdown = function(prop){
		
		var options = $.extend({
			callback	: function(){},
			timestamp	: 0
		},prop);
		
		var left, d, h, m, s, positions;

		// Initialize the plugin
		init(this, options);
		
		positions = this.find('.position');
		
		(function tick(){
			
			// Time left
			left = Math.floor((options.timestamp - (new Date())) / 1000);
			
			if(left < 0){
				left = 0;
			}
			
			// Number of days left
			d = Math.floor(left / days);
			updateDuo(0, 1, d);
			left -= d*days;
			
			// Number of hours left
			h = Math.floor(left / hours);
			updateDuo(2, 3, h);
			left -= h*hours;
			
			// Number of minutes left
			m = Math.floor(left / minutes);
			updateDuo(4, 5, m);
			left -= m*minutes;
			
			// Number of seconds left
			s = left;
			updateDuo(6, 7, s);
			
			// Calling an optional user supplied callback
			options.callback(d, h, m, s);
			
			// Scheduling another call of this function in 1s
			setTimeout(tick, 1000);
		})();
		
		// This function updates two digit positions at once
		function updateDuo(minor,major,value){
			switchDigit(positions.eq(minor),Math.floor(value/10)%10);
			switchDigit(positions.eq(major),value%10);
		}
		
		return this;
	};


	function init(elem, options){
		elem.addClass('countdownHolder');

		// Creating the markup inside the container
		$.each(['Days','Hours','Minutes','Seconds'],function(i){
			$('<span class="count'+this+'">').html(
				'<span class="position">\
					<span class="digit static">0</span>\
				</span>\
				<span class="position">\
					<span class="digit static">0</span>\
				</span>'
			).appendTo(elem);
			
			if(this!="Seconds"){
				elem.append('<span class="countDiv countDiv'+i+'"></span>');
			}
		});

	}

	// Creates an animated transition between the two numbers
	function switchDigit(position,number){
		
		var digit = position.find('.digit')
		
		if(digit.is(':animated')){
			return false;
		}
		
		if(position.data('digit') == number){
			// We are already showing this number
			return false;
		}
		
		position.data('digit', number);
		
		var replacement = $('<span>',{
			'class':'digit',
			css:{
				top:'-2.1em',
				opacity:0
			},
			html:number
		});
		
		// The .static class is added when the animation
		// completes. This makes it run smoother.
		
		digit
			.before(replacement)
			.removeClass('static')
			.animate({top:'2.5em',opacity:0},'fast',function(){
				digit.remove();
			})

		replacement
			.delay(100)
			.animate({top:0,opacity:1},'fast',function(){
				replacement.addClass('static');
			});
	}
})(jQuery);
/* End */
;; /* /bitrix/templates/main/components/bitrix/form.result.new/send.review/script.min.js?15083955021057*/
; /* /js/jquery.countdown.js?14737541053004*/

// JavaScript Document
$(document).ready(function() {
	const swiper = new Swiper(".features_slide", {
		slidesPerView: 5,
		spaceBetween: 16,
		slidesPerGroup: 1,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar"
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	});
})


$(document).ready(function() {
	var totalSlide = $('.banner_slide .swiper-slide').length;
	const swiper = new Swiper(".banner_slide", {
		slidesPerView: 1,
		pagination: {
			el: ".swiper-pagination",
			type: "progressbar",
		},
		autoplay: {
			delay: 3000,
		},
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		}
	})
	swiper.on('slideChange', function() {
		var	fragment = document.querySelector('.image-slider__current');
		var current = swiper.realIndex + 1;
		if (current > totalSlide)
			current = 1;
		var idx = current < 10 ? ("0" + current) : current;
		var tdx = totalSlide < 10 ? ("0" + totalSlide) : totalSlide;
		fragment.innerHTML = ('<span>' + idx + '</span>' + '<em>|</em>' + '<span class="total_number">' + tdx + '</span>');
	});
	
	// scroll smooth
	$('#btn_up').hide();
	$(".scroll").on('click', function(event) {
		if (this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;
			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	})

	$(window).scroll(function() {
		if ($(window).scrollTop() >= 800) {
			$('.btn_up_scroll').fadeIn();
		} else {
			$('.btn_up_scroll').fadeOut();
		}
	})
	
	// notice close
	$('.notice_close').click(function() {
		$(".notice").fadeOut("slow");
	})
	
	// modal
	$('.client_btn').click(function() {
		$("#modal_client").fadeIn();
	})
	
	$('.close').click(function() {
		$("#modal_client").fadeOut();
	})
	
	// tab
	$('.client_tab a:not(:first)').addClass('inactive');
	$('.client_tab_content').hide();
	$('.client_tab_content:first').show()
	$('.client_tab a').click(function(){
		var tab = $(this).attr('id');
		if ($(this).hasClass('inactive')) {
			$('.client_tab a').addClass('inactive');           
			$(this).removeClass('inactive');
			$('.client_tab_content').hide();
			$('#'+ tab + 'C').fadeIn('slow');
		}
	});
	
	// client hover image
	$('.client_banner').mouseenter(function() {
		$('.client_banner img').css('transform', 'scale(1.2)')
		$('.client_btn').css('background-color', '#b19f93')
	})
	$('.client_banner').mouseleave(function() {
		$('.client_banner img').css('transform', 'scale(1)')
		$('.client_btn').css('background-color', '#99a1a4')
	})
	
	//Enterprise image hover
	$('.enterprise_card:first-child').addClass('active')
	$('.enterprise_card:not(:first)').addClass('inactive');
	$('.enterprise_card .enterprise_info:first').show()
	
	$('.enterprise_card:nth-child(2)').prepend("<h4 class='enterprise_subtitle'>Connect</h4>")
	$('.enterprise_card:nth-child(3)').prepend("<h4 class='enterprise_subtitle'>Customize</h4>")
	$('.enterprise_card:nth-child(4)').prepend("<h4 class='enterprise_subtitle'>Professional</h4>")
	
	$('.enterprise_card:nth-child(2)').mouseenter(function() {
		$(this).removeClass('inactive')
		$(this).addClass('active')
		$('.enterprise_card:first-child').removeClass('active')
		$('.enterprise_card:first-child').addClass('inactive')
		$('.enterprise_card .enterprise_info:first').hide()
		$('.enterprise_card:nth-child(2) .enterprise_info').show()
		$('.enterprise_card:first').prepend("<h4 class='enterprise_subtitle'>Security</h4>").fadeIn('slow');
		$('.enterprise_card:nth-child(2) h4.enterprise_subtitle').hide();
	})
	
	$('.enterprise_card:nth-child(2)').mouseleave(function() {
		$(this).addClass('inactive')
		$(this).removeClass('active')
		$('.enterprise_card:first-child').addClass('active')
		$('.enterprise_card:first-child').removeClass('inactive')
		$('.enterprise_card .enterprise_info:first').show()
		$('.enterprise_card:nth-child(2) .enterprise_info').hide()
		$('.enterprise_card:first h4.enterprise_subtitle').fadeOut().remove();
		$('.enterprise_card:nth-child(2) h4.enterprise_subtitle').show()
	})
	
	$('.enterprise_card:nth-child(3)').mouseenter(function() {
		$(this).removeClass('inactive')
		$(this).addClass('active')
		$('.enterprise_card .enterprise_info:nth-child(3)').show();
		$('.enterprise_card:first-child').removeClass('active')
		$('.enterprise_card:first-child').addClass('inactive')
		$('.enterprise_card .enterprise_info:first').hide()
		$('.enterprise_card:nth-child(2) .enterprise_info').hide()
		$('.enterprise_card:nth-child(4) .enterprise_info').hide()
		$('.enterprise_card:nth-child(3) .enterprise_info').show()
		$('.enterprise_card:first').prepend("<h4 class='enterprise_subtitle'>Security</h4>").fadeIn('slow');
		$('.enterprise_card:nth-child(3) h4.enterprise_subtitle').hide();
	})
	
	$('.enterprise_card:nth-child(3)').mouseleave(function() {
		$(this).addClass('inactive')
		$(this).removeClass('active')
		$('.enterprise_card .enterprise_info:nth-child(3)').hide();
		$('.enterprise_card:first-child').addClass('active')
		$('.enterprise_card:first-child').removeClass('inactive')
		$('.enterprise_card .enterprise_info:first').show()
		$('.enterprise_card:nth-child(3) .enterprise_info').hide()
		$('.enterprise_card:first h4.enterprise_subtitle').fadeOut().remove();
		$('.enterprise_card:nth-child(3) h4.enterprise_subtitle').show()
	})
	
	$('.enterprise_card:nth-child(4)').mouseenter(function() {
		$(this).removeClass('inactive')
		$(this).addClass('active')
		$('.enterprise_card .enterprise_info:nth-child(4)').show();
		$('.enterprise_card:first-child').removeClass('active')
		$('.enterprise_card:first-child').addClass('inactive')
		$('.enterprise_card .enterprise_info:first').hide()
		$('.enterprise_card:nth-child(4) .enterprise_info').show()
		$('.enterprise_card:first').prepend("<h4 class='enterprise_subtitle'>Security</h4>").fadeIn('slow');
		$('.enterprise_card:nth-child(4) h4.enterprise_subtitle').hide();
	})
	
	$('.enterprise_card:nth-child(4)').mouseleave(function() {
		$(this).addClass('inactive')
		$(this).removeClass('active')
		$('.enterprise_card .enterprise_info:nth-child(4)').hide();
		$('.enterprise_card:first-child').addClass('active')
		$('.enterprise_card:first-child').removeClass('inactive')
		$('.enterprise_card .enterprise_info:first').show()
		$('.enterprise_card:nth-child(4) .enterprise_info').hide()
		$('.enterprise_card:first h4.enterprise_subtitle').fadeOut().remove();
		$('.enterprise_card:nth-child(4) h4.enterprise_subtitle').show()
	})
})


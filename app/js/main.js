$(document).ready(function () {
	// var myDemo = new scrollbot('.prive', 14).setStyle(
	// 	{
	// 		'z-index': '2',
	// 		background: '#BDBDBD',
	// 	},
	// 	{
	// 		border: '1px solid #BDBDBD',
	// 		background: 'transparent',
	// 		'border-radius': '8px',
	// 	}
	// )

	$('.header-top__service span').on('click', function () {
		$('.header-top__service--dropdown').addClass('active')
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest(
				'.header-top__service span, .header-top__service--dropdown'
			).length
		) {
			$('.header-top__service span').removeClass('active')
			$('.header-top__service--dropdown').removeClass('active')
		}
		e.stopPropagation()
	})

	$('.header-top__service--close').on('click', function () {
		$('.header-top__service--dropdown').removeClass('active')
	})

	$('.header-top__buying').on('click', function () {
		$('.header-top__info--dropdown').addClass('active')
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('.header-top__buying, .header-top__info--dropdown')
				.length
		) {
			$('.header-top__buying').removeClass('active')
			$('.header-top__info--dropdown').removeClass('active')
		}
		e.stopPropagation()
	})

	$('.header-top__info--close').on('click', function () {
		$('.header-top__info--dropdown').removeClass('active')
	})

	$('.header__form .field input').on('click', function () {
		$('.header__loop').addClass('active')
		$('.header__form--btn').addClass('active')
	})

	$('.header__form .field input').keyup(function () {
		const value = $(this).val()

		if (value.length > 0) {
			$('.header__close').addClass('length')
		} else {
			$('.header__close').removeClass('length')
		}
	})

	$('.header__close').on('click', function () {
		$('.header__close').removeClass('length')
		$('.header__form .field input').val('')
		$('.header__loop').removeClass('active')
		$('.header__form--btn').removeClass('active')
	})

	$('.header__catalog').on('click', function () {
		const id = $(this)
		const img = id.find('img')
		id.toggleClass('active')
		if (id.hasClass('active')) {
			img.attr('src', 'images/catalog-2.svg')
		} else {
			img.attr('src', 'images/catalog-1.svg')
		}
		$('.catalog-menu').toggleClass('active')

		return false
	})

	$('.catalog-menu__close').on('click', function () {
		$('.header__catalog').removeClass('active')
		$('.header__catalog img').attr('src', 'images/catalog-1.svg')
		$('.catalog-menu').removeClass('active')
	})

	$('.header__burger').on('click', function () {
		$('.mobile-menu').fadeIn()
	})

	$('.mobile-menu__close').on('click', function () {
		$('.mobile-menu').fadeOut()
	})

	$('.mobile-catalog__subtitle').on('click', function () {
		$(this).next().slideToggle()
	})

	$('.mobile-menu__catalog').on('click', function () {
		$('.mobile-catalog').addClass('active')
	})

	$('.fixed-menu__item--catalog').on('click', function () {
		$('.mobile-catalog').addClass('active')
	})

	$('.mobile-catalog__back').on('click', function () {
		$('.mobile-catalog').removeClass('active')
	})

	$('.mobile-menu__service').on('click', function () {
		$(this).next().slideToggle()
	})

	$('.fixed-menu__item--support').on('click', function () {
		$('.fixed-support').addClass('active')
	})

	$('.fixed-support__close').on('click', function () {
		$('.fixed-support').removeClass('active')
	})

	$('.header__nav--favorite a').on('click', function (e) {
		e.preventDefault()
		if ($(window).width() > 991) {
			$('[data-favorite]').fadeIn()
		}
	})

	$(document).on('click', function (e) {
		if (
			!$(e.target).closest('.header__nav--favorite a, [data-favorite]').length
		) {
			$('.header__nav--favorite a').fadeIn()
			$('[data-favorite]').fadeOut()
		}
		e.stopPropagation()
	})

	$('.header-modal__close').on('click', function () {
		$('[data-favorite]').fadeOut()
	})

	$('.header__nav--basket a').on('click', function (e) {
		if ($(window).width() > 991) {
			$('[data-basket]').fadeIn()
		}
	})

	$(document).on('click', function (e) {
		if (!$(e.target).closest('.header__nav--basket a, [data-basket]').length) {
			$('.header__nav--basket a').fadeIn()
			$('[data-basket]').fadeOut()
		}
		e.stopPropagation()
	})

	$('.header-modal__close').on('click', function () {
		$('[data-basket]').fadeOut()
	})

	const showcase = new Swiper('.showcase__inner', {
		slidesPerView: 1,
		loop: true,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	const catalogSellers = new Swiper('.catalog__container', {
		slidesPerView: 'auto',
		loop: false,
		spaceBetween: 20,

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		breakpoints: {
			991: {
				slidesPerView: 3,
				spaceBetween: 27,
				loop: true,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 29,
				loop: true,
			},
		},
	})


	const stockProduct = new Swiper('.stock-slider__container', {
		slidesPerView: 'auto',
		spaceBetween: 20,

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
		breakpoints: {
			991: {
				slidesPerView: 3,
				spaceBetween: 27,
				loop: true,
			},
			1600: {
				slidesPerView: 4,
				spaceBetween: 29,
				loop: true,
			},
		},
	})

	$('.card__like').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.card__compare').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.catalog-promotion .catalog__tabs li').on('click', function () {
		$('.catalog__tabs li').removeClass('active')
		$(this).addClass('active')
	})

	$('.catalog-new .catalog__tabs li').on('click', function () {
		$('.catalog__tabs li').removeClass('active')
		$(this).addClass('active')
	})

	$('.catalog-sellers .catalog__tabs li').on('click', function () {
		$('.catalog__tabs li').removeClass('active')
		$(this).addClass('active')
	})


	$('.search__inner .catalog__tabs li').on('click', function () {
		$('.catalog__tabs li').removeClass('active')
		$(this).addClass('active')
	})

	var mySwiper

	function resizeScreen() {
		if ($(window).width() < 991) {
			if ($('.projects__container').length > 0) {
				if (mySwiper === undefined) {
					mySwiper = new Swiper('.projects__container', {
						slidesPerView: 'auto',
						spaceBetween: 30,
						loop: false,
					})
				}
			}
		} else {
			if (mySwiper !== undefined) {
				mySwiper.destroy(true, true)
				mySwiper = undefined
			}
		}

		return false
	}
	resizeScreen()

	$(window).resize(function () {
		resizeScreen()
	})

	var swiperNew = new Swiper('.product__thumbs', {
		spaceBetween: 14,
		slidesPerView: 4,
		direction: 'vertical',
		navigation: {
			nextEl: '.product__thumbs--next',
			prevEl: '.product__thumbs--prev',
		},
	})

	var swiperGallery = new Swiper('.product__top', {
		thumbs: {
			swiper: swiperNew,
		},

		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},

		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true,
		},
	})

	$('.product__payment--svg').on('click', function () {
		$('.product__payment--dropdown').fadeIn()
	})

	$('.product__payment--close').on('click', function () {
		$('.product__payment--dropdown').fadeOut()
	})

	$('.installation').on('click', function () {
		$(this).toggleClass('active')
	})

	$('.product__nav').on('click', function () {
		$(this).toggleClass('active')
	})

	$('input').keyup(function () {
		const label = $(this).parent().find('.field__label')
		const span = $(this).parent().find('.field__error')
		if ($(this).val().length > 0) {
			$(label).addClass('top')
			$(this).removeClass('error')
			$(span).hide()
		} else {
			$(label).removeClass('top')
		}
	})

	$('[data-validation]').on('change', function () {
		let isError = false
		console.log($(this))
		const min = $(this).attr('data-min')
		const max = $(this).attr('data-max')
		const length = $(this).val().length

		if (min && length < min) {
			isError = true
		}

		if (max && length > max) {
			isError = true
		}

		isError ? $(this).removeClass('success') : $(this).addClass('success')
	})

	$('.phone-number').mask('+7(999) 999-99-99')

	$.fancybox.defaults.touch = false
	$.fancybox.defaults.closeExisting = true

	$().fancybox({
		selector:
			'.product__top .swiper-slide-container:not(.swiper-slide-duplicate)',
		backFocus: false,
		// afterShow: function (instance, current) {
		// 	current.opts.$orig.closest('.swiper-container')
		// },
	})

	$('[data-nav-item]').on('click', function () {
		if (!$(this).hasClass('active')) {
			var index = $(this).index()
			$(this).addClass('active').siblings().removeClass('active')
			$('[data-nav').hide().eq(index).fadeIn()
		}
		return false
	})

	$('.product-tabs__head').on('click', function () {
		const id = $(this).next().find('.product-tabs__nav--item')

		$(this).toggleClass('active')
		id.toggleClass('active')
	})

	$('.product-reviews__form--mobile').on('click', function () {
		$('.product-reviews__form--radios').toggleClass('active')
	})

	$('.product-reviews__form--close').on('click', function () {
		$('.product-reviews__form--radios').removeClass('active')
	})

	$('.basket__form--top .field input').keyup(function () {
		const value = $(this).val()

		if (value.length > 0) {
			$('.basket__form--btn').addClass('active')
		} else {
			$('.basket__form--btn').removeClass('active')
		}
	})

	$('.radio input[type=radio]').change(function () {
		const check = $(this).prop('checked')
		const parent = $(this).closest('.radio-border')

		if (check) {
			$('.radio').removeClass('checked')
			$(parent).addClass('checked')
		}
	})

	$('.basket__forward').on('click', function () {
		$('.basket__dropdown').toggleClass('active')
	})

	$('.basket__plus').on('click', function () {
		var input = $(this).parent().find('input')
		input.val(+input.val() + 1)

		return false
	})

	$('.basket__minus').on('click', function () {
		var input = $(this).parent().find('input')
		if (input.val() > 1) {
			input.val(+input.val() - 1)
		}

		return false
	})

	$('.order__list li').on('click', function () {
		$('.order__list li').removeClass('active')
		$(this).addClass('active')
	})

	$('.order__payment--info').on('click', function () {
		$('.order__payment--info').toggleClass('active')
	})

	$('.order__payment--open').on('click', function () {
		$('.order-pay').fadeIn()
	})

	$('.order-pay__close').on('click', function () {
		$('.order-pay').fadeOut()
	})

	$('.filter__head').on('click', function () {
		var body = $(this).parent()
		var open = body.find('.filter__body')
		$(this).toggleClass('active')
		open.toggleClass('active')
	})

	$('.search__sort--info').on('click', function () {
		$(this).next().fadeToggle()
	})

	$('.filter-mobile').on('click', function () {
		$('.filter').addClass('active')
		$('body').addClass('overflow')
	})

	$('.filter__close').on('click', function () {
		$('.filter').removeClass('active')
		$('body').removeClass('overflow')
	})

	
	$(".stock-products__close").on('click', function(){
		$(this).parent().hide()
	})

	$('.stock-products__clear').on('click', function(){
		$(this).hide()
		$('.stock-products__items').hide()
	})

	$('.order-map__change').on('click', function(){
		$('.map-order').fadeIn()
	})


	$('.map-order__close').on('click', function(){
		$('.map-order').fadeOut()
	})

})

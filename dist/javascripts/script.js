(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

$(function () {
		var current = void 0; //表示されているindex
		// let pagenationWrap =".wada-m-scrollify__pagenation";
		// let pagenationMethod = pagenationWrap + " a";
		// let pagenationCurrent =pagenationWrap + " .active";
		var naviMethod = ".wada-m-nav ul li";
		var mainvisulaMethod = ".wada-m-mainvisual__box__list ul li";
		var pagenationAddActive = "active";
		var scrollifyWrap = ".wada-m-scrollify";
		var scrollifyAddSection = scrollifyWrap + "__section";
		var hamTriger = ".wada-m-hamburger__trigger";
		var hamNavTrigger = ".wada-m-nav";
		function scrollifyPage() {
				$.scrollify({
						section: scrollifyAddSection,
						scrollbars: false,
						updateHash: false,
						before: function before(i, box) {
								current = i;
								$(naviMethod).find('a').removeClass(pagenationAddActive);
								$(naviMethod).find('a').eq(i).addClass(pagenationAddActive);
						},
						afterRender: function afterRender() {
								$(mainvisulaMethod).each(function (i) {
										$(this).on('click', function () {
												$.scrollify.move(i + 1);
										});
								});
								$(naviMethod).each(function (i) {
										$(this).on('click', function () {
												$.scrollify.move(i);
												$(hamNavTrigger).removeClass('open');
												$(hamTriger).removeClass('active');
												$(".wada-o-main").removeClass('open');
												$('.wada-m-overlay').removeClass('open');
										});
								});
								$(naviMethod + ':first-child').find('a').addClass(pagenationAddActive);
								hamburgerToggle();
						}
				});
				console.log(current);
				$(window).on('resize', function () {

						if (current) {
								var currentScrl = $(scrollifyAddSection).eq(current).offset().top;
								$(window).scrollTop(currentScrl);
						}
				});
		}
		function hamburgerToggle() {
				$(hamTriger).on('click', function () {
						if ($(hamTriger).hasClass('active')) {
								$(hamTriger).removeClass('active');
								$(".wada-o-main").removeClass('open');
								$(hamNavTrigger).removeClass('open');
								$('.wada-m-overlay').removeClass('open');
						} else {
								$(hamTriger).addClass('active');
								$(".wada-o-main").addClass('open');
								$(hamNavTrigger).addClass('open');
								$('.wada-m-overlay').addClass('open');
						}
				});
				$('.wada-m-overlay').on('click', function () {
						if ($(this).hasClass('open')) {
								$(this).removeClass('open');
								$(hamTriger).removeClass('active');
								$(".wada-o-main").removeClass('open');
								$(amNavTrigger).removeClass('open');
						}
				});
				// $('.wada-m-nav ul li a').on('click',function(){
				// 	if($(this).hasClass('open')){
				// 		$(this).removeClass('open');
				// 		$(hamTriger).removeClass('active');
				// 		$(".wada-o-main").removeClass('open');
				// 		$(amNavTrigger).removeClass('open');
				// 	}
				// });
		}

		scrollifyPage();
});

},{}]},{},[1]);

$(document).on('click', '.hamburger-menu', function(){
	$('body').toggleClass('active-overlay active-mobile-nav');
});
$(document).on('click', '.close-nav-btn', function(){
	$('body').toggleClass('active-overlay active-mobile-nav');
});
$(document).on('click', '.overlay', function(){
	$('body').removeClass('active-overlay active-mobile-nav active-popup-form');
	$('.popup-form').removeClass('login-form register-form show-respass');
});
$('.user-meta .login-btn').click(function(){
	$('body').addClass('active-overlay active-popup-form');
	$('.popup-form').addClass('login-form');
	$('.popup-form iframe').attr('src', '');
	$('.popup-form').removeClass('show-respass');
	setTimeout(function(){
		$('.popup-form iframe').attr('src', 'https://aff.m88test.com/g/login');
	}, 500);
});
$('.user-meta .register-btn').click(function(){
	$('body').addClass('active-overlay active-popup-form');
	$('.popup-form').addClass('register-form');
	$('.popup-form iframe').attr('src', '');
	setTimeout(function(){
		$('.popup-form iframe').attr('src', 'https://aff.m88test.com/g/register');
	}, 500);
});
var currentMousePos = { x: -1, y: -1 };
$(document).on('mouseup','.login-form .respass-btn', function(event){
	$('.popup-form iframe').attr('src', '');
	$('.popup-form').removeClass('register-form');
	$('.popup-form').addClass('show-respass');
	setTimeout(function(){
		$('.popup-form iframe').attr('src', 'https://aff.m88test.com/g/reset_password');
	}, 500);
});
$(document).on('mouseup','.login-form .reg-btn', function(event){
	$('.popup-form iframe').attr('src', '');
	$('.popup-form').removeClass('login-form show-respass');
	$('.popup-form').addClass('register-form');
	setTimeout(function(){
		$('.popup-form iframe').attr('src', 'https://aff.m88test.com/g/register');
	}, 500);
});
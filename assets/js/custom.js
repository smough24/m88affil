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
$('.at-tab').click(function(){
	$('.at-tab').removeClass('active-tab');
	$(this).addClass('active-tab');

	var tabName = $(this).attr('name');
	$('.tab-content').removeClass('active-tab-content');
	$(".tab-content[name='"+tabName+"']").addClass('active-tab-content');
});
$('.faq-single').not(':first').find('.faq-submenu').slideToggle(0);
$('.faq-title').click(function(){
	$('.faq-single').removeClass('active-faq');
	$(this).parent().addClass('active-faq').find('.faq-submenu').slideToggle(300);
	$('.faq-single').not('.active-faq').find('.faq-submenu').slideUp(300);
});

$('.faq-sub-content').slideToggle(0);
$('.faq-sub-title').click(function(){
	$(this).parent().toggleClass('active-sub-faq').find('.faq-sub-content').slideToggle(200);
});
$('.tnc-single').not(':first').find('.tnc-submenu').slideToggle(0);
$('.tnc-title').click(function(){
	$('.tnc-single').removeClass('active-tnc');
	$(this).parent().addClass('active-tnc').find('.tnc-submenu').slideToggle(300);
	$('.tnc-single').not('.active-tnc').find('.tnc-submenu').slideUp(300);
});

$('.tnc-sub-content').slideToggle(0);

$('.tnc-sub-title').click(function(){
	$(this).parent().toggleClass('active-sub-tnc').find('.tnc-sub-content').slideToggle(200);
});
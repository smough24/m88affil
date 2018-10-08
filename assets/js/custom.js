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
	$(this).parent().toggleClass('active-sub-faq').find('.faq-sub-content').slideToggle(200);;
});

$('.tnc-single').not(':first').find('.tnc-submenu').slideToggle(0);
$('.tnc-title').click(function(){
	$('.tnc-single').removeClass('active-tnc');
	$(this).parent().addClass('active-tnc').find('.tnc-submenu').slideToggle(300);
	$('.tnc-single').not('.active-tnc').find('.tnc-submenu').slideUp(300);
});

$('.tnc-sub-content').slideToggle(0);
$('.tnc-sub-title').click(function(){
	$(this).parent().toggleClass('active-sub-tnc').find('.tnc-sub-content').slideToggle(200);;
});
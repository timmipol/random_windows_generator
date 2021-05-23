$( document ).ready( function () {

	var i18n = new I18n();
	i18n.localize();
	$('.lang-picker #english').addClass('selected');

  $('.lang-picker #russian').on('click', function () {
		i18n.lang('ru');
		selectLang($(this));
	})
	
	$('.lang-picker #ukrainian').on('click', function () {
		i18n.lang('ua');
		selectLang($(this));
	})
	$('.lang-picker #english').on('click', function () {
		i18n.lang('en');
		selectLang($(this));
	})
	$('.lang-picker #spanish').on('click', function () {
		i18n.lang('es');
		selectLang($(this));
	})

	function selectLang (picker) {
		$('.lang-picker li').removeClass('selected');
		picker.addClass('selected');
	}
});
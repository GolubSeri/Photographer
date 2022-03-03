$('input[data-value], textarea[data-value]').each(function() {
	if (this.value == '' || this.value == $(this).attr('data-value')) {
		this.value = $(this).attr('data-value');
		if($(this).hasClass('l') && $(this).parent().find('.form_label').length==0){
			$(this).parent().append('<div class="form_label">'+$(this).attr('data-value')+'</div>');
		}
	}
	if(this.value!=$(this).attr('data-value') && this.value!=''){
		$(this).addClass('focus');
		$(this).parent().addClass('focus');
		if($(this).hasClass('l') && $(this).parent().find('.form_label').length==0){
			$(this).parent().append('<div class="form_label">' +$(this).attr('data-value')+'</div>');
		}
	}

	$(this).click(function() {
		if (this.value == $(this).attr('data-value')) {
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','password');
			};
			this.value = '';
		};
	});

	$(this).blur(function() {
		if (this.value == ''){
			this.value = $(this).attr('data-value');
				$(this).removeClass('focus');
				$(this).parent().removeClass('focus');
			if($(this).attr('data-type')=='pass'){
				$(this).attr('type','text');
			};
		};
	});
});
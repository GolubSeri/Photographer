function ibg(){
	$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();

// function amh(){
// 	$(".amh").each(function () {
// 	  	var mh = 0, block_class = this.classList.item(0), lim = this.classList.item(2);
// 	  	if ($(window).width() >= Number(lim))
// 	  	{
// 			$("." + block_class).each(function () {
// 				$("." + block_class).css('min-height', 'auto');
// 				var h_block = $(this).height();
// 				console.log(block_class);
// 				console.log(h_block);
// 			  	if(h_block > mh) {
// 			     	mh = h_block;
// 			    };
// 			});
// 			$("." + block_class).css('min-height', mh + 'px');
// 	  	} else {
// 	  		$("." + block_class).each(function () {
// 				$("." + block_class).css('min-height', 'auto');
// 			});
// 	  	}
// 	});
// }

function amh(){
	const adaptItems = document.querySelectorAll('.amh');
}
amh();
// jQuery(window).resize(function() { 
// 	amh();
//  });

// Бургер
const iconMenu = document.querySelector('.header-body__icon');
const menuBody = document.querySelector('.header-body-menu');

if(iconMenu){
	iconMenu.addEventListener('click', function(e){
		document.body.classList.toggle('_lock');
		iconMenu.classList.toggle('_active');
		menuBody.classList.toggle('_active');
	});
}

// Анимация при наведении мыши
const hoverAnimItems = document.querySelectorAll('.hoverAnim');
if (hoverAnimItems.length > 0){
	hoverAnimItems.forEach(hoverItem => {
		hoverItem.addEventListener("mouseenter", hoverAnim);
	});

	function hoverAnim(e){
		const hoverItem = e.target;
		if(!hoverItem.classList.contains('hoverAnimActive')){
			hoverItem.classList.add('hoverAnimActive');
			let delay = Number(hoverItem.classList[2]);

			setTimeout(() => {
				hoverItem.classList.remove('hoverAnimActive')
			}, delay);
		}
	}
}

// Прокрутка при клике 
const menuLinks = document.querySelectorAll('.header-body-list__item[data-goto], .homeIcon[data-goto]');
if (menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		const menuLink = e.target;
		if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.dataset.goto);
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('.header-body').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			e.preventDefault();

			// Закрываем меню при переходе на блок
			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
			}
		}
	}
}
const logoLink = document.querySelector('.header-body__logo');
if(logoLink){
	logoLink.addEventListener('click', function(e){
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
		e.preventDefault();
	});
}

// Анимация при скролле
const animItems = document.querySelectorAll('.animItems');
const hoverItems = document.querySelectorAll('.noHover');
const header = document.querySelector('.header-body');
let scrollPos = 0;

if (animItems.length > 0){
	window.addEventListener('scroll', animOnScroll);
	function animOnScroll(params){
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight){
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
				animItem.classList.add('animActive');

				if (animItem.classList.contains('disableHover')){
					setTimeout(() => {
						animItem.classList.remove('disableHover');
						animItem.classList.add('activeHover');
					}, 1500);
				}

				if (animItem.classList.contains('hoverAnim')){
					setTimeout(() => {
						animItem.classList.remove('animActive');
					}, 1000);
				}
			}
		}

		let headerHeight = header.offsetHeight;
		if (pageYOffset > scrollPos && pageYOffset > 90){
			// Down
			document.querySelector('.header-body').style.height = 60 + 'px';
			document.querySelector('.header-container').classList.add('styleActive');
		} else {
			// Up
			if (pageYOffset < 90){
				document.querySelector('.header-body').style.height = 95 + 'px';
				document.querySelector('.header-container').classList.remove('styleActive');
			}
		}
		scrollPos = pageYOffset;

		// let headerHeight = header.offsetHeight;
		// if (pageYOffset > headerHeight && pageYOffset < headerHeight + 50){
		// 	document.querySelector('.header-body').style.height = headerHeight - (pageYOffset/10) + 'px';
		// }
		// if (pageYOffset >= headerHeight + 50)
		// if (headerHeight >= 60){
		// 	document.querySelector('.header-body').style.height = headerHeight - pageYOffset + 'px';
		// 	console.log(headerHeight - pageYOffset + 'px');
		// }
		// if (pageYOffset < headerHeight && headerHeight < 94){
		// 	document.querySelector('.header-body').style.height = headerHeight + pageYOffset + 'px';
		// 	console.log(headerHeight + pageYOffset + 'px');
		// }
		

	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
	}

	setTimeout(() => {
		animOnScroll();
	}, 300);
}
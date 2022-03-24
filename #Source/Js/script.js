function ibg(){
	// $.each($('.ibg'), function(index, val) {
	// 	if($(this).find('img').length>0){
	// 		$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
	// 	}
	// });
	var ibgItems = document.querySelectorAll('.ibg');
	if (ibgItems.length > 0){
		ibgItems.forEach(ibgItem => {
			let imgItem = ibgItem.querySelector('img').getAttribute('src');
			ibgItem.style.backgroundImage = 'url("' + imgItem + '")';
		});
	}
}
ibg();

const adaptItems = document.querySelectorAll('.amh');
let newAdaptItems = [];

// Удаляю дубликаты
adaptItems.forEach(adaptItem => {
	if(!newAdaptItems.includes(adaptItem.classList[0])){
		newAdaptItems.push(adaptItem.classList[0]);
	}
});

function amh(newAdaptItems){
	let maxHeight = 0;
	newAdaptItems.forEach(newAdaptItem => {
		let items = document.querySelectorAll('.' + newAdaptItem);

		if( Number(items[0].classList[2]) < window.innerWidth){
			items.forEach(item => {
				item.style.minHeight = 'auto';
				if (item.offsetHeight > maxHeight){
					maxHeight = item.offsetHeight;
				}
			});

			items.forEach(item => {
				item.style.minHeight = maxHeight + 'px';
			});
		} else {
			items.forEach(item => {
				item.style.minHeight = 'auto';
			});
		}

	});
};

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        amh(newAdaptItems);
    };
});

// jQuery(window).resize(function() { 
// 	amh(newAdaptItems);
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

let headerPadDown = 30;
let headerPadUp = 15;

// Прокрутка при клике 
// const menuLinks = Array.prototype.slice.call(document.querySelector('.header-body-menu-list').querySelectorAll('a'));
const menuLinks = Array.prototype.slice.call(document.querySelectorAll('.header-body-menu-list, .scrollLink'));

let allLinks = [];
menuLinks.forEach(menuLink => {
	menuLink.querySelectorAll('a').forEach(linksItem=> {
		allLinks.push(linksItem);
	});
});

if (menuLinks.length > 0){
	menuLinks.forEach(menuLink => {
		menuLink.addEventListener("click", onMenuLinkClick);
	});

	function onMenuLinkClick(e) {
		let menuLink = e.target;
		if (!menuLink.getAttribute('href')){
			menuLink = menuLink.parentNode;
		}
		e.preventDefault();

		let gotoName = menuLink.getAttribute('href').replace('#', '.')
		if(gotoName && document.querySelector(gotoName)){
		// if(menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)){
			const gotoBlock = document.querySelector(menuLink.getAttribute('href').replace('#', '.'));
			const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset + ( headerPadDown * 2 ) - document.querySelector('.header-body').offsetHeight;

			window.scrollTo({
				top: gotoBlockValue,
				behavior: "smooth"
			});
			

			// Закрываем меню при переходе на блок
			if(iconMenu.classList.contains('_active')){
				document.body.classList.remove('_lock');
				iconMenu.classList.toggle('_active');
				menuBody.classList.toggle('_active');
			}
		}
	}
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
					}, 900);
				}

				if (animItem.classList.contains('hoverAnim')){
					setTimeout(() => {
						animItem.classList.remove('animActive');
					}, 1000);
				}
			}
		}

		// Анимация хедера
		let headerHeight = header.offsetHeight;
		if (pageYOffset > scrollPos && pageYOffset > 90){
			// Down
			document.querySelector('.header-body').style.paddingTop = headerPadUp + 'px';
			document.querySelector('.header-body').style.paddingBottom = headerPadUp + 'px';
			document.querySelector('.header-container').classList.add('styleActive');
		} else {
			// Up
			if (pageYOffset < 90){
				document.querySelector('.header-body').style.paddingTop = headerPadDown + 'px';
				document.querySelector('.header-body').style.paddingBottom = headerPadDown + 'px';
				document.querySelector('.header-container').classList.remove('styleActive');
			}
		}
		scrollPos = pageYOffset;
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

// Попап
const popupLinks = document.querySelectorAll('.popup-link');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;
const timeout = 400;

// Вешаем события на ссылки
if (popupLinks.length > 0){
	for (let index = 0; index < popupLinks.length; index++) {
		const popupLink = popupLinks[index];
		popupLink.addEventListener('click', function(e){
			const popupName = popupLink.getAttribute('href').replace('#', '');
			const curentPopup = document.getElementById(popupName);
			popupOpen(curentPopup);
			e.preventDefault();
		});
	}
}

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
	for (let index = 0; index < popupCloseIcon.length; index++) {
		const el = popupCloseIcon[index];
		el.addEventListener('click', function(e){
			popupClose(el.closest('.popup'));
			e.preventDefault();
		});
	}
}

function popupOpen(currentPopup) {
	if (currentPopup && unlock){
		const popupActive = document.querySelector('.popup.open');
		if (popupActive){
			popupClose(popupActive, false);
		} else {
			bodyLock();
		}
		currentPopup.classList.add('open');
		currentPopup.addEventListener('click', function(e){
			if (!e.target.closest('.popup__content')){
				popupClose(e.target.closest('.popup'));
			}
		});
	}
}

function popupClose(popupActive, doUnlock = true) {
	if (unlock){
		popupActive.classList.remove('open');
		if (doUnlock){
			bodyUnlock();
		}
	}
}

function bodyLock() {
	const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

	for (let index = 0; index < lockPadding.length; index++) {
		const el = lockPadding[index];
		el.style.paddingRight = lockPaddingValue;
	}

	body.style.paddingRight = lockPaddingValue;
	body.classList.add('lock');

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout)
}

function bodyUnlock() {
	setTimeout(function (){
		if (lockPadding.length > 0){
			for (let index = 0; index < lockPadding.length; index++) {
				const el = lockPadding[index];
				el.style.paddingRight = '0px';
			}
		}

		body.style.paddingRight = '0px';
		body.classList.remove('lock');
	}, timeout);

	unlock = false;
	setTimeout(function(){
		unlock = true;
	}, timeout);
}

document.addEventListener('DOMContentLoaded', function(){
	const form = document.getElementById('form');
	form.addEventListener('submit', formSend);

	async function formSend(e){
		e.preventDefault();

		let error = formValidate(form);

		let formData = new FormData(form);

		if(error === 0){
			form.classList.add('_sending');
			/*
			let response = await fetch('sendmail.php', {
				method: 'POST',
				body: formData
			});
			if(response.ok){
				let result = await response.json();
				alert(result.message);
				form.reset();
				form.classList.remove('_sending');
			} else {
				alert('Ошибка');
				form.classList.add('_sending');
			}
			*/
		} else {
			alert('Заполните поля!');
		}
	}

	function formValidate(form){
		let error = 0;
		let formReq = document.querySelectorAll('.req');

		for (let index = 0; index < formReq.length; index++) {
			const input = formReq[index];		
			formRemoveError(input);

			if (input.classList.contains('email')){
				if(emailTest(input)){
					formAddError(input)
					error++;
				}
			} else {
				if (input.value === input.dataset.value){
					formAddError(input);
					error++;
				}
			}
		}

		return error;
	}

	function formAddError(input) {
		// input.parentElement.classList.add('_error');
		input.classList.add('_error');
	}
	function formRemoveError(input) {
		// input.parentElement.classList.remove('_error');
		input.classList.remove('_error');
	}

	function emailTest(input) {
		return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
	}
});

// Ширина скилла
let lines = document.querySelectorAll('.skill__line');
let linesWidth = document.querySelectorAll('.skill__text');

for (var i = 0; i < lines.length; i++) {
	let lineWidth = linesWidth[i].querySelector('p').outerText;
	lines[i].style.setProperty('--lineWidth', lineWidth);
}
function ibg(){$.each($(".ibg"),(function(e,t){$(this).find("img").length>0&&$(this).css("background-image",'url("'+$(this).find("img").attr("src")+'")')}))}ibg();const adaptItems=document.querySelectorAll(".amh");let newAdaptItems=[];function amh(e){let t=0;e.forEach((e=>{let o=document.querySelectorAll("."+e);console.log(o[0].classList[2]),Number(o[0].classList[2])<window.innerWidth?(o.forEach((e=>{e.style.minHeight="auto",e.offsetHeight>t&&(t=e.offsetHeight)})),o.forEach((e=>{e.style.minHeight=t+"px"}))):o.forEach((e=>{e.style.minHeight="auto"}))}))}adaptItems.forEach((e=>{newAdaptItems.includes(e.classList[0])||newAdaptItems.push(e.classList[0])})),jQuery(window).resize((function(){amh(newAdaptItems)}));const iconMenu=document.querySelector(".header-body__icon"),menuBody=document.querySelector(".header-body-menu");iconMenu&&iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active")}));const hoverAnimItems=document.querySelectorAll(".hoverAnim");if(hoverAnimItems.length>0){function hoverAnim(e){const t=e.target;if(!t.classList.contains("hoverAnimActive")){t.classList.add("hoverAnimActive");let e=Number(t.classList[2]);setTimeout((()=>{t.classList.remove("hoverAnimActive")}),e)}}hoverAnimItems.forEach((e=>{e.addEventListener("mouseenter",hoverAnim)}))}let headerPadDown=30,headerPadUp=15;const menuLinks=document.querySelectorAll(".header-body-list__item[data-goto], .homeIcon[data-goto]");if(menuLinks.length>0){function onMenuLinkClick(e){const t=e.target;if(t.dataset.goto&&document.querySelector(t.dataset.goto)){const o=document.querySelector(t.dataset.goto).getBoundingClientRect().top+pageYOffset+2*headerPadDown-document.querySelector(".header-body").offsetHeight;window.scrollTo({top:o,behavior:"smooth"}),e.preventDefault(),iconMenu.classList.contains("_active")&&(document.body.classList.remove("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"))}}menuLinks.forEach((e=>{e.addEventListener("click",onMenuLinkClick)}))}const logoLink=document.querySelector(".header-body__logo");logoLink&&logoLink.addEventListener("click",(function(e){window.scrollTo({top:0,behavior:"smooth"}),e.preventDefault()}));const animItems=document.querySelectorAll(".animItems"),hoverItems=document.querySelectorAll(".noHover"),header=document.querySelector(".header-body");let scrollPos=0;if(animItems.length>0){function animOnScroll(e){for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,n=offset(t).top,s=4;let i=window.innerHeight-o/s;o>window.innerHeight&&(i=window.innerHeight-window.innerHeight/s),pageYOffset>n-i&&pageYOffset<n+o&&(t.classList.add("animActive"),t.classList.contains("disableHover")&&setTimeout((()=>{t.classList.remove("disableHover"),t.classList.add("activeHover")}),1500),t.classList.contains("hoverAnim")&&setTimeout((()=>{t.classList.remove("animActive")}),1e3))}header.offsetHeight;pageYOffset>scrollPos&&pageYOffset>90?(document.querySelector(".header-body").style.paddingTop=headerPadUp+"px",document.querySelector(".header-body").style.paddingBottom=headerPadUp+"px",document.querySelector(".header-container").classList.add("styleActive")):pageYOffset<90&&(console.log(),document.querySelector(".header-body").style.paddingTop=headerPadDown+"px",document.querySelector(".header-body").style.paddingBottom=headerPadDown+"px",document.querySelector(".header-container").classList.remove("styleActive")),scrollPos=pageYOffset}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=400;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const t=popupLinks[e];t.addEventListener("click",(function(e){const o=t.getAttribute("href").replace("#","");popupOpen(document.getElementById(o)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const t=popupCloseIcon[e];t.addEventListener("click",(function(e){popupClose(t.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,t=!0){unlock&&(e.classList.remove("open"),t&&bodyUnlock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";for(let t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),400)}function bodyUnlock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),400),unlock=!1,setTimeout((function(){unlock=!0}),400)}$("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=$(this).attr("data-value")||(this.value=$(this).attr("data-value"),$(this).hasClass("l")&&0==$(this).parent().find(".form_label").length&&$(this).parent().append('<div class="form_label">'+$(this).attr("data-value")+"</div>")),this.value!=$(this).attr("data-value")&&""!=this.value&&($(this).addClass("focus"),$(this).parent().addClass("focus"),$(this).hasClass("l")&&0==$(this).parent().find(".form_label").length&&$(this).parent().append('<div class="form_label">'+$(this).attr("data-value")+"</div>")),$(this).click((function(){this.value==$(this).attr("data-value")&&("pass"==$(this).attr("data-type")&&$(this).attr("type","password"),this.value="")})),$(this).blur((function(){""==this.value&&(this.value=$(this).attr("data-value"),$(this).removeClass("focus"),$(this).parent().removeClass("focus"),"pass"==$(this).attr("data-type")&&$(this).attr("type","text"))}))}));
function ibg(){var e=document.querySelectorAll(".ibg");e.length>0&&e.forEach((e=>{let t=e.querySelector("img").getAttribute("src");e.style.backgroundImage='url("'+t+'")'}))}ibg();const adaptItems=document.querySelectorAll(".amh");let newAdaptItems=[];function amh(e){let t=0;e.forEach((e=>{let o=document.querySelectorAll("."+e);Number(o[0].classList[2])<window.innerWidth?(o.forEach((e=>{e.style.minHeight="auto",e.offsetHeight>t&&(t=e.offsetHeight)})),o.forEach((e=>{e.style.minHeight=t+"px"}))):o.forEach((e=>{e.style.minHeight="auto"}))}))}adaptItems.forEach((e=>{newAdaptItems.includes(e.classList[0])||newAdaptItems.push(e.classList[0])})),document.addEventListener("DOMContentLoaded",(function(e){window.onresize=function(){amh(newAdaptItems)}}));const iconMenu=document.querySelector(".header-body__icon"),menuBody=document.querySelector(".header-body-menu");iconMenu&&iconMenu.addEventListener("click",(function(e){document.body.classList.toggle("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active")}));const hoverAnimItems=document.querySelectorAll(".hoverAnim");if(hoverAnimItems.length>0){function hoverAnim(e){const t=e.target;if(!t.classList.contains("hoverAnimActive")){t.classList.add("hoverAnimActive");let e=Number(t.classList[2]);setTimeout((()=>{t.classList.remove("hoverAnimActive")}),e)}}hoverAnimItems.forEach((e=>{e.addEventListener("mouseenter",hoverAnim)}))}let headerPadDown=30,headerPadUp=15;const menuLinks=Array.prototype.slice.call(document.querySelectorAll(".header-body-menu-list, .scrollLink"));let allLinks=[];if(menuLinks.forEach((e=>{e.querySelectorAll("a").forEach((e=>{allLinks.push(e)}))})),menuLinks.length>0){function onMenuLinkClick(e){let t=e.target;t.getAttribute("href")||(t=t.parentNode),e.preventDefault();let o=t.getAttribute("href").replace("#",".");if(o&&document.querySelector(o)){const e=document.querySelector(t.getAttribute("href").replace("#",".")).getBoundingClientRect().top+pageYOffset+2*headerPadDown-document.querySelector(".header-body").offsetHeight;window.scrollTo({top:e,behavior:"smooth"}),iconMenu.classList.contains("_active")&&(document.body.classList.remove("_lock"),iconMenu.classList.toggle("_active"),menuBody.classList.toggle("_active"))}}menuLinks.forEach((e=>{e.addEventListener("click",onMenuLinkClick)}))}const animItems=document.querySelectorAll(".animItems"),hoverItems=document.querySelectorAll(".noHover"),header=document.querySelector(".header-body");let scrollPos=0;if(animItems.length>0){function animOnScroll(e){for(let e=0;e<animItems.length;e++){const t=animItems[e],o=t.offsetHeight,n=offset(t).top,s=4;let l=window.innerHeight-o/s;o>window.innerHeight&&(l=window.innerHeight-window.innerHeight/s),pageYOffset>n-l&&pageYOffset<n+o&&(t.classList.add("animActive"),t.classList.contains("disableHover")&&setTimeout((()=>{t.classList.remove("disableHover"),t.classList.add("activeHover")}),900),t.classList.contains("hoverAnim")&&setTimeout((()=>{t.classList.remove("animActive")}),1e3))}header.offsetHeight;pageYOffset>scrollPos&&pageYOffset>90?(document.querySelector(".header-body").style.paddingTop=headerPadUp+"px",document.querySelector(".header-body").style.paddingBottom=headerPadUp+"px",document.querySelector(".header-container").classList.add("styleActive")):pageYOffset<90&&(document.querySelector(".header-body").style.paddingTop=headerPadDown+"px",document.querySelector(".header-body").style.paddingBottom=headerPadDown+"px",document.querySelector(".header-container").classList.remove("styleActive")),scrollPos=pageYOffset}function offset(e){const t=e.getBoundingClientRect(),o=window.pageXOffset||document.documentElement.scrollLeft,n=window.pageYOffset||document.documentElement.scrollTop;return{top:t.top+n,left:t.left+o}}window.addEventListener("scroll",animOnScroll),setTimeout((()=>{animOnScroll()}),300)}const popupLinks=document.querySelectorAll(".popup-link"),body=document.querySelector("body"),lockPadding=document.querySelectorAll(".lock-padding");let unlock=!0;const timeout=400;if(popupLinks.length>0)for(let e=0;e<popupLinks.length;e++){const t=popupLinks[e];t.addEventListener("click",(function(e){const o=t.getAttribute("href").replace("#","");popupOpen(document.getElementById(o)),e.preventDefault()}))}const popupCloseIcon=document.querySelectorAll(".close-popup");if(popupCloseIcon.length>0)for(let e=0;e<popupCloseIcon.length;e++){const t=popupCloseIcon[e];t.addEventListener("click",(function(e){popupClose(t.closest(".popup")),e.preventDefault()}))}function popupOpen(e){if(e&&unlock){const t=document.querySelector(".popup.open");t?popupClose(t,!1):bodyLock(),e.classList.add("open"),e.addEventListener("click",(function(e){e.target.closest(".popup__content")||popupClose(e.target.closest(".popup"))}))}}function popupClose(e,t=!0){unlock&&(e.classList.remove("open"),t&&bodyUnlock())}function bodyLock(){const e=window.innerWidth-document.querySelector(".wrapper").offsetWidth+"px";for(let t=0;t<lockPadding.length;t++){lockPadding[t].style.paddingRight=e}body.style.paddingRight=e,body.classList.add("lock"),unlock=!1,setTimeout((function(){unlock=!0}),400)}function bodyUnlock(){setTimeout((function(){if(lockPadding.length>0)for(let e=0;e<lockPadding.length;e++){lockPadding[e].style.paddingRight="0px"}body.style.paddingRight="0px",body.classList.remove("lock")}),400),unlock=!1,setTimeout((function(){unlock=!0}),400)}document.addEventListener("DOMContentLoaded",(function(){const e=document.getElementById("form");function t(e){e.classList.add("_error")}function o(e){e.classList.remove("_error")}function n(e){return!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(e.value)}e.addEventListener("submit",(async function(s){s.preventDefault();let l=function(e){let s=0,l=document.querySelectorAll(".req");for(let e=0;e<l.length;e++){const i=l[e];o(i),i.classList.contains("email")?n(i)&&(t(i),s++):i.value===i.dataset.value&&(t(i),s++)}return s}();new FormData(e);0===l?e.classList.add("_sending"):alert("Заполните поля!")}))}));let lines=document.querySelectorAll(".skill__line"),linesWidth=document.querySelectorAll(".skill__text");for(var i=0;i<lines.length;i++){let e=linesWidth[i].querySelector("p").outerText;lines[i].style.setProperty("--lineWidth",e)}jQuery(document).ready((function(e){e("input[data-value], textarea[data-value]").each((function(){""!=this.value&&this.value!=e(this).attr("data-value")||(this.value=e(this).attr("data-value"),e(this).hasClass("l")&&0==e(this).parent().find(".form_label").length&&e(this).parent().append('<div class="form_label">'+e(this).attr("data-value")+"</div>")),this.value!=e(this).attr("data-value")&&""!=this.value&&(e(this).addClass("focus"),e(this).parent().addClass("focus"),e(this).hasClass("l")&&0==e(this).parent().find(".form_label").length&&e(this).parent().append('<div class="form_label">'+e(this).attr("data-value")+"</div>")),e(this).click((function(){this.value==e(this).attr("data-value")&&("pass"==e(this).attr("data-type")&&e(this).attr("type","password"),this.value="")})),e(this).blur((function(){""==this.value&&(this.value=e(this).attr("data-value"),e(this).removeClass("focus"),e(this).parent().removeClass("focus"),"pass"==e(this).attr("data-type")&&e(this).attr("type","text"))}))}))}));
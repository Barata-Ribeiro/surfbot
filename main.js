/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={61:(t,e,n)=>{var r=n(698).default;function o(){"use strict";t.exports=o=function(){return e},t.exports.__esModule=!0,t.exports.default=t.exports;var e={},n=Object.prototype,i=n.hasOwnProperty,a=Object.defineProperty||function(t,e,n){t[e]=n.value},c="function"==typeof Symbol?Symbol:{},u=c.iterator||"@@iterator",s=c.asyncIterator||"@@asyncIterator",l=c.toStringTag||"@@toStringTag";function d(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{d({},"")}catch(t){d=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof y?e:y,i=Object.create(o.prototype),c=new q(r||[]);return a(i,"_invoke",{value:x(t,n,c)}),i}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=f;var v={};function y(){}function m(){}function p(){}var g={};d(g,u,(function(){return this}));var b=Object.getPrototypeOf,w=b&&b(b(_([])));w&&w!==n&&i.call(w,u)&&(g=w);var k=p.prototype=y.prototype=Object.create(g);function E(t){["next","throw","return"].forEach((function(e){d(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,a,c,u){var s=h(t[o],t,a);if("throw"!==s.type){var l=s.arg,d=l.value;return d&&"object"==r(d)&&i.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,c,u)}),(function(t){n("throw",t,c,u)})):e.resolve(d).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,u)}))}u(s.arg)}var o;a(this,"_invoke",{value:function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}})}function x(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=S(a,n);if(c){if(c===v)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=h(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===v)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function S(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,S(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),v;var o=h(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,v;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,v):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,v)}function C(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function T(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function q(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(C,this),this.reset(!0)}function _(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(i.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:O}}function O(){return{value:void 0,done:!0}}return m.prototype=p,a(k,"constructor",{value:p,configurable:!0}),a(p,"constructor",{value:m,configurable:!0}),m.displayName=d(p,l,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,d(t,l,"GeneratorFunction")),t.prototype=Object.create(k),t},e.awrap=function(t){return{__await:t}},E(L.prototype),d(L.prototype,s,(function(){return this})),e.AsyncIterator=L,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new L(f(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(k),d(k,l,"Generator"),d(k,u,(function(){return this})),d(k,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=_,q.prototype={constructor:q,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(T),!t)for(var e in this)"t"===e.charAt(0)&&i.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r],a=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var c=i.call(o,"catchLoc"),u=i.call(o,"finallyLoc");if(c&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(c){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&i.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var o=r;break}}o&&("break"===t||"continue"===t)&&o.tryLoc<=e&&e<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=t,a.arg=e,o?(this.method="next",this.next=o.finallyLoc,v):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),v},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),T(n),v}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;T(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:_(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),v}},e}t.exports=o,t.exports.__esModule=!0,t.exports.default=t.exports},698:t=>{function e(n){return t.exports=e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t.exports.__esModule=!0,t.exports.default=t.exports,e(n)}t.exports=e,t.exports.__esModule=!0,t.exports.default=t.exports},687:(t,e,n)=>{var r=n(61)();t.exports=r;try{regeneratorRuntime=r}catch(t){"object"==typeof globalThis?globalThis.regeneratorRuntime=r:Function("r","regeneratorRuntime = r")(r)}}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={exports:{}};return t[r](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(t,e,n,r,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void n(t)}c.done?e(u):Promise.resolve(u).then(r,o)}var e=n(687),r=n.n(e);function o(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function i(t){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},i(t)}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(o=r.key,a=void 0,a=function(t,e){if("object"!==i(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!==i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o),"symbol"===i(a)?a:String(a)),r)}var o,a}function c(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var u=function(){function t(e,n,r,i,a,c){o(this,t),this.btnMobile=document.getElementById(e||"btn-mobile"),this.links=document.querySelectorAll(n||".header-menu ul a"),this.nav=document.querySelector(r||".header-menu"),this.overlay=document.querySelector(i||".overlay"),this.activeClass=a||"btnAtivo",this.overlayActiveClass="overlayAtivo",this.events=c||["click","touchstart"],this.toggleMenu=this.toggleMenu.bind(this)}return c(t,[{key:"toggleMenu",value:function(t){"touchstart"===t.type&&t.preventDefault(),this.nav.classList.toggle(this.activeClass);var e=this.nav.classList.contains(this.activeClass);t.currentTarget.setAttribute("aria-expanded",e),e?(t.currentTarget.setAttribute("aria-label","Fechar Menu"),this.overlay.classList.add(this.overlayActiveClass),document.body.style.overflow="hidden"):(t.currentTarget.setAttribute("aria-label","Abrir Menu"),this.overlay.classList.remove(this.overlayActiveClass),document.body.style.overflow="")}},{key:"addLinkEvents",value:function(){var t=this;this.links.forEach((function(e){e.addEventListener("click",(function(){t.overlay.classList.remove(t.overlayActiveClass),t.nav.classList.remove(t.activeClass),document.body.style.overflow=""}))}))}},{key:"addEvents",value:function(){var t=this;this.events.forEach((function(e){t.btnMobile.addEventListener(e,t.toggleMenu)}))}},{key:"init",value:function(){return this.addEvents(),this.addLinkEvents(),this}}]),t}(),s=function(){function t(e,n){o(this,t),this.operation=document.querySelector(e),this.activeClass=n}return c(t,[{key:"workingData",value:function(){this.weekDays=this.operation.dataset.semana.split(",").map(Number),this.weekHours=this.operation.dataset.horario.split(",").map(Number)}},{key:"currentData",value:function(){this.todayDate=new Date,this.todayDay=this.todayDate.getDay(),this.todayHour=this.todayDate.getUTCHours()-3}},{key:"isOpen",value:function(){var t=-1!==this.weekDays.indexOf(this.todayDay),e=this.todayHour>=this.weekHours[0]&&this.todayHour<this.weekHours[1];return t&&e}},{key:"activeOpen",value:function(){this.isOpen()&&this.operation.classList.add(this.activeClass)}},{key:"init",value:function(){return this.operation&&(this.workingData(),this.currentData(),this.activeOpen()),this}}]),t}(),l=function(){function t(e,n){o(this,t),this.internalLinks=document.querySelectorAll(e),this.options=void 0===n?{behavior:"smooth",block:"start"}:n,this.scrollToSection=this.scrollToSection.bind(this)}return c(t,[{key:"scrollToSection",value:function(t){t.preventDefault();var e=t.currentTarget.getAttribute("href");e.startsWith("#")?document.querySelector(e).scrollIntoView(this.options):window.location.href="".concat(e,"?scrollTo=").concat(encodeURIComponent(t.currentTarget.hash))}},{key:"addLinkEvent",value:function(){var t=this;this.internalLinks.forEach((function(e){e.addEventListener("click",t.scrollToSection)}))}},{key:"init",value:function(){return this.internalLinks.length&&this.addLinkEvent(),this}}]),t}(),d=function(){function t(e){o(this,t),this.element=e,this.timeout=null}return c(t,[{key:"debounce",value:function(t,e){clearTimeout(this.timeout),this.timeout=setTimeout((function(){t()}),e)}},{key:"limpar",value:function(t){return t.replace(/\D/g,"")}},{key:"construir",value:function(t){return t.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g,"$1.$2.$3-$4")}},{key:"formatar",value:function(t){var e=this.limpar(t);return this.construir(e)}},{key:"validar",value:function(t){var e=t.match(/(?:\d{3}[-.\s]?){3}\d{2}/g);return e&&e[0]===t}},{key:"validarNaMudanca",value:function(t){var e=this;this.debounce((function(){e.validar(t.value)||11===t.value.length?(t.value=e.formatar(t.value),t.setCustomValidity(""),t.style.border="1px solid #c3ccd9"):(t.style.border="2px solid red",t.setCustomValidity("CPF inválido \n Formato: 000.000.000-00")),t.reportValidity()}),1e3)}},{key:"adicionarEvento",value:function(){var t=this;this.element.addEventListener("input",(function(){t.validarNaMudanca(t.element)}))}},{key:"init",value:function(){return this.adicionarEvento(),this}}]),t}(),f=function(){function t(e){o(this,t),this.element=e,this.timeout=null}return c(t,[{key:"debounce",value:function(t,e){clearTimeout(this.timeout),this.timeout=setTimeout((function(){t()}),e)}},{key:"limpar",value:function(t){return t.replace(/\D/g,"")}},{key:"construir",value:function(t){return t.replace(/(\d{5}[-\s]?)(\d{3})/g,"$1-$2")}},{key:"formatar",value:function(t){var e=this.limpar(t);return this.construir(e)}},{key:"validar",value:function(t){var e=t.match(/(?:\d{5}[-.\s]?)\d{3}$/);return e&&e[0]===t}},{key:"validarNaMudanca",value:function(t){var e=this;this.debounce((function(){e.validar(t.value)||9===t.value.length?(t.value=e.formatar(t.value),t.setCustomValidity(""),t.style.border="1px solid #c3ccd9"):(t.style.border="2px solid red",t.setCustomValidity("CEP inválido \n Formato: 00000-000")),t.reportValidity()}),1e3)}},{key:"adicionarEvento",value:function(){var t=this;this.element.addEventListener("input",(function(){t.validarNaMudanca(t.element)}))}},{key:"init",value:function(){return this.adicionarEvento(),this}}]),t}(),h=function(){function t(e){o(this,t),this.element=e,this.timeout=null}return c(t,[{key:"debounce",value:function(t,e){clearTimeout(this.timeout),this.timeout=setTimeout((function(){t()}),e)}},{key:"limpar",value:function(t){return t.replace(/\D/g,"")}},{key:"construir",value:function(t){return 16===t.length?t.replace(/(\d{4})(\d{4})(\d{4})(\d{4})/g,"$1 $2 $3 $4"):t}},{key:"formatar",value:function(t){var e=this.limpar(t);return this.construir(e)}},{key:"validarNumero",value:function(t){var e=t.match(/(?:\d{4}[-.\s]?){3}\d{4}/g);return e&&e[0]===t}},{key:"validarData",value:function(t,e){var n=new Date,r=n.getFullYear(),o=n.getMonth()+1,i=parseInt(e,10),a=parseInt(t,10);return!(i<r||i===r&&a<=o)}},{key:"adicionarEventos",value:function(){var t=this,e=this.element.querySelector("#numero-cartao"),n=this.element.querySelector("#mes-cartao"),r=this.element.querySelector("#ano-cartao"),o=function(){t.validarData(n.value,r.value)?(n.style.border="1px solid #c3ccd9",r.style.border="1px solid #c3ccd9",n.setCustomValidity("")):(n.style.border="2px solid red",r.style.border="2px solid red",n.setCustomValidity("Data de expiração inválida")),n.reportValidity()};e.addEventListener("input",(function(){t.debounce((function(){var n=t.formatar(e.value);e.value=n,t.validarNumero(n)?(e.setCustomValidity(""),e.style.border="1px solid #c3ccd9"):(e.style.border="2px solid red",e.setCustomValidity("Número do cartão inválido")),e.reportValidity()}),1e3)})),n.addEventListener("change",(function(){t.debounce(o,1e3)})),r.addEventListener("change",(function(){t.debounce(o,1e3)}))}},{key:"init",value:function(){return this.adicionarEventos(),this}}]),t}(),v=function(){function t(e,n){if(o(this,t),this.estadoSelect=document.getElementById(e),this.cidadeSelect=document.getElementById(n),!this.estadoSelect||!this.cidadeSelect)throw new Error("Elementos estado/cidade não encontrados!")}return c(t,[{key:"FetchCityEventListener",value:function(){var t=this;this.estadoSelect.addEventListener("change",(function(e){var n=e.target.value,r="https://servicodados.ibge.gov.br/api/v1/localidades/estados/".concat(n,"/municipios?orderBy=nome");fetch(r).then((function(t){return t.json()})).then((function(e){t.cidadeSelect.innerHTML='<option value="">Selecione a Cidade</option>',e.forEach((function(e){var n=document.createElement("option");n.value=e.nome,n.text=e.nome,t.cidadeSelect.add(n)}))})).catch((function(t){console.log(t)}))}))}},{key:"init",value:function(){return this.FetchCityEventListener(),this}}]),t}();function y(){var t=document.querySelector('label[for="cartao"]'),e=document.querySelector('label[for="boleto"]');function n(t,e){t.classList.add("ativo"),e.classList.remove("ativo"),t.querySelector("input").checked=!0,e.querySelector("input").checked=!1}t.addEventListener("click",(function(){return n(t,e)})),e.addEventListener("click",(function(){return n(e,t)})),document.querySelectorAll('.form-pagamento-tipo input[type="radio"]').forEach((function(t){t.addEventListener("click",(function(t){var e=t.target.id;document.querySelectorAll(".form-pagamento-conteudo").forEach((function(t){t.id==="form-pagamento-".concat(e)?t.classList.remove("esconder"):t.classList.add("esconder")}))}))}))}function m(){var t=document.querySelectorAll(".form-plano-tipo label"),e=document.querySelectorAll(".aulas-tipo-planos div"),n=document.querySelector("[data-valor]");function r(r){if(r&&r.classList&&r.querySelector){t.forEach((function(t){t.classList.remove("ativo");var e=t.querySelector("input");e&&(e.checked=!1)})),r.classList.add("ativo");var o=r.querySelector("input");o&&(o.checked=!0),e.forEach((function(t){t.dataset.plano===o.id?(t.classList.remove("esconder"),n.dataset.valor=t.querySelector(".font-2-s-b.cor-p2").textContent.replace("R$","").trim(),n.textContent="R$ ".concat(n.dataset.valor)):t.classList.add("esconder")}))}}t.forEach((function(t){t.addEventListener("click",(function(){r(t)}))}));var o=new URLSearchParams(window.location.search).get("produto");"infantil"===o?r(document.querySelector('label[for="infantil"]')):"adulto"===o?r(document.querySelector('label[for="adulto"]')):"profissional"===o&&r(document.querySelector('label[for="profissional"]'))}function p(){var t=document.getElementById("intro_email").value;document.getElementById("intro-form").action="./matricula.html?email=".concat(encodeURIComponent(t))}function g(){var t=new URLSearchParams(window.location.search).get("intro_email");t&&(document.getElementById("email").value=t);var e=document.getElementById("intro-form");e&&e.addEventListener("submit",p)}function b(){var e;return e=r().mark((function t(){var e,n,o,i,a,c,p,b;return r().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("loading"!==document.readyState){t.next=3;break}return t.next=3,new Promise((function(t){document.addEventListener("DOMContentLoaded",t)}));case 3:e=document.getElementById("cpf"),n=document.getElementById("cep"),o=document.getElementById("form-pagamento-cartao"),i=document.querySelector("[data-semana]"),e&&n&&o&&(new d(e).init(),new f(n).init(),new h(o).init(),new v("estado","cidade").init(),y(),m()),i&&new s("[data-semana","aberto").init(),(a=new l('[data-menu="smooth"] a[href^="#"]')).init(),(c=new URLSearchParams(window.location.search)).has("scrollTo")&&(p=decodeURIComponent(c.get("scrollTo")),(b=document.querySelector(p))&&b.scrollIntoView(a.options)),new u("btn-mobile",".header-menu ul a",".header-menu",".overlay").init(),g();case 16:case"end":return t.stop()}}),t)})),b=function(){var n=this,r=arguments;return new Promise((function(o,i){var a=e.apply(n,r);function c(e){t(a,o,i,c,u,"next",e)}function u(e){t(a,o,i,c,u,"throw",e)}c(void 0)}))},b.apply(this,arguments)}!function(){b.apply(this,arguments)}()})()})();
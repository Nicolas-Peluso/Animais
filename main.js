/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./js/modules/AnimaNumeros.js":
/*!************************************!*\
  !*** ./js/modules/AnimaNumeros.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ InitAnimaNumeros)\n/* harmony export */ });\nclass InitAnimaNumeros {\n  constructor(element, observerClass) {\n    this.observer = undefined;\n    this.Numeros = document.querySelectorAll(element);\n    this.handleObserver = this.handleObserver.bind(this);\n    this.observerClass = observerClass;\n    this.ObserverTarget = document.querySelector('.numeros');\n  }\n\n  static incrementarNumero(numero) {\n    const total = +numero.innerText;\n    let start = 0;\n    const Incremento = total / 100;\n\n    const tiamer = setInterval(() => {\n      numero.innerText = start.toFixed(0);\n\n      start += Incremento;\n      if (start > total) {\n        clearInterval(tiamer);\n      }\n    }, 10);\n  }\n\n  AnimaNumbers() {\n    this.Numeros.forEach((numero) => {\n      this.constructor.incrementarNumero(numero);\n    });\n  }\n\n  handleObserver(muta) {\n    if (muta[0].target.classList.contains(this.observerClass)) {\n      this.observer.disconnect();\n      this.AnimaNumbers();\n    }\n  }\n\n  addMutationObserver() {\n    this.observer = new MutationObserver(this.handleObserver);\n    this.observer.observe(this.ObserverTarget, { attributes: true });\n  }\n\n  Init() {\n    if (this.ObserverTarget && this.Numeros.length) this.addMutationObserver();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/AnimaNumeros.js?");

/***/ }),

/***/ "./js/modules/DorpDownMenu.js":
/*!************************************!*\
  !*** ./js/modules/DorpDownMenu.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ DropDownMenu)\n/* harmony export */ });\n/* harmony import */ var _OutsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutsideClick.js */ \"./js/modules/OutsideClick.js\");\n\n\nfunction DropDownMenu() {\n  const ElementMenu = document.querySelectorAll('[data-dropDown]');\n  const UserEvents = ['click', 'touchstart'];\n\n  function MenuHandleClick(e) {\n    e.preventDefault();\n    this.classList.add('ativoSubMenu');\n\n    (0,_OutsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => this.classList.remove('ativoSubMenu'), this);\n  }\n  ElementMenu.forEach((menu) => {\n    UserEvents.forEach((UserEvent) => menu.addEventListener(UserEvent, MenuHandleClick));\n  });\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/DorpDownMenu.js?");

/***/ }),

/***/ "./js/modules/FetchAnimais.js":
/*!************************************!*\
  !*** ./js/modules/FetchAnimais.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ fetchAnimais)\n/* harmony export */ });\n/* harmony import */ var _AnimaNumeros_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AnimaNumeros.js */ \"./js/modules/AnimaNumeros.js\");\n\n\nfunction fetchAnimais(url, target) {\n  function CriarAnimal(Animal) {\n    const div = document.createElement('div');\n    div.classList.add('numero-animal');\n    div.innerHTML = `<h3>${Animal.especie}</h3> \n  <span>${Animal.total}</span> `;\n    return div;\n  }\n\n  async function criarAnimais() {\n    const request = await fetch(url);\n    const response = await request.json();\n    const Numeros = document.querySelector(target);\n    response.forEach((Animal) => {\n      const DivAnimal = CriarAnimal(Animal);\n      Numeros.appendChild(DivAnimal);\n    });\n\n    if (request.ok) {\n      const animaNumeros = new _AnimaNumeros_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('.numeros-grid span', 'ativo');\n      animaNumeros.Init();\n    }\n  }\n  return criarAnimais();\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/FetchAnimais.js?");

/***/ }),

/***/ "./js/modules/Funcionamento.js":
/*!*************************************!*\
  !*** ./js/modules/Funcionamento.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFuncionamento)\n/* harmony export */ });\nfunction initFuncionamento() {\n  const EstaAberto = document.querySelector('.dados');\n  const funcionamento = document.querySelector('[data-Semana]');\n  const diasSemana = funcionamento.dataset.semana.split(',').map((item) => +item);\n  const HorarioSemana = funcionamento.dataset.horario.split(',').map((item) => +item);\n\n  const DataAgora = new Date();\n  const DiaAgora = DataAgora.getDay();\n  const HorarioAgora = DataAgora.getHours();\n\n  if (diasSemana.includes(DiaAgora) && HorarioAgora >= HorarioSemana[0]\n    && HorarioAgora < HorarioSemana[1]) {\n    EstaAberto.classList.add('aberto');\n  } else {\n    EstaAberto.classList.add('fechado');\n  }\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/Funcionamento.js?");

/***/ }),

/***/ "./js/modules/OutsideClick.js":
/*!************************************!*\
  !*** ./js/modules/OutsideClick.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ outside)\n/* harmony export */ });\nfunction outside(callBack, DefautElement) {\n  const data = 'data-outside';\n  const html = document.documentElement;\n\n  function handleOutsideClick(e) {\n    if (!DefautElement.contains(e.target)) {\n      callBack();\n      html.removeEventListener('click', handleOutsideClick);\n      DefautElement.removeAttribute(data);\n    }\n  }\n\n  if (DefautElement.getAttribute(data) === null) {\n    setTimeout(() => { html.addEventListener('click', handleOutsideClick); });\n    DefautElement.setAttribute(data, '');\n  }\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/OutsideClick.js?");

/***/ }),

/***/ "./js/modules/ShowDesc.js":
/*!********************************!*\
  !*** ./js/modules/ShowDesc.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ShowDesc)\n/* harmony export */ });\nfunction ShowDesc() {\n  const AllSectionsAnimaisDesc = document.querySelectorAll('[data-animais=\"desc\"] section');\n  const imgs = document.querySelectorAll('img[src^=\"img/imagem\"]');\n\n  function handleClick(ref) {\n    AllSectionsAnimaisDesc.forEach((i) => i.classList.remove('ativo-descAnimals'));\n    const SectionSelcted = document.querySelector(`#${ref}`);\n    const descricao = SectionSelcted.dataset.anime;\n    SectionSelcted.classList.add('ativo-descAnimals', descricao);\n  }\n  imgs.forEach((img) => {\n    img.addEventListener('click', () => {\n      const ref = img.getAttribute('class');\n      handleClick(ref);\n    });\n  });\n  handleClick('raposa');\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/ShowDesc.js?");

/***/ }),

/***/ "./js/modules/animaçãoSroll.js":
/*!*************************************!*\
  !*** ./js/modules/animaçãoSroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Scrolldefault)\n/* harmony export */ });\nfunction Scrolldefault() {\n  const sections = document.querySelectorAll('.js-scroll');\n  const TotalTop = (window.innerHeight * 70) / 100;\n  window.addEventListener('scroll', () => {\n    sections.forEach((section) => {\n      const { top } = section.getBoundingClientRect();\n\n      if (top < TotalTop) section.classList.add('ativo');\n\n      else if (section.classList.contains('ativo')) section.classList.remove('ativo');\n    });\n  });\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/anima%C3%A7%C3%A3oSroll.js?");

/***/ }),

/***/ "./js/modules/bitcoinFetch.js":
/*!************************************!*\
  !*** ./js/modules/bitcoinFetch.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FetchBit)\n/* harmony export */ });\nasync function FetchBit() {\r\n  const bicoinhtml = document.querySelector('.BitCoin span');\r\n  const request = await fetch('https://blockchain.info/ticker');\r\n  const response = await request.json();\r\n  const BitCoin = +response.BRL.sell;\r\n  bicoinhtml.innerText = `${(1000 / BitCoin).toFixed(3)}R$`;\r\n}\r\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/bitcoinFetch.js?");

/***/ }),

/***/ "./js/modules/crodiao.js":
/*!*******************************!*\
  !*** ./js/modules/crodiao.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Cordiao)\n/* harmony export */ });\nclass Cordiao {\r\n  constructor(dt) {\r\n    this.faqList = document.querySelectorAll(dt);\r\n  }\r\n\r\n  faqMake() {\r\n    this.faqList.forEach((faq) => {\r\n      const dd = faq.nextElementSibling;\r\n      faq.addEventListener('click', () => {\r\n        dd.classList.toggle('showDD');\r\n      });\r\n    });\r\n  }\r\n\r\n  initAcordiao() {\r\n    console.log(this.faqList[0].nextElementSibling.outerHTML.startsWith('<dd'));\r\n    if (this.faqList[0].outerHTML.startsWith('<dt>') && this.faqList[0].nextElementSibling.outerHTML.startsWith('<dd')) {\r\n      this.faqMake();\r\n    } else console.log('voce deve ter um dl seguida por um dt, o elemeto passado nao corresponde a esses parametros');\r\n    return this;\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/crodiao.js?");

/***/ }),

/***/ "./js/modules/menu-Mobile.js":
/*!***********************************!*\
  !*** ./js/modules/menu-Mobile.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ menuMobile)\n/* harmony export */ });\n/* harmony import */ var _OutsideClick_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OutsideClick.js */ \"./js/modules/OutsideClick.js\");\n\n\nfunction menuMobile() {\n  const menu = document.querySelector('[data-menu=\"lista\"]');\n  const button = document.querySelector('[data-menu=\"button\"]');\n\n  function handleClick() {\n    menu.classList.toggle('active');\n    button.classList.toggle('active');\n  }\n  (0,_OutsideClick_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(() => {\n    menu.classList.remove('active');\n    button.classList.remove('active');\n  }, menu);\n\n  button.addEventListener('click', handleClick);\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/menu-Mobile.js?");

/***/ }),

/***/ "./js/modules/modal.js":
/*!*****************************!*\
  !*** ./js/modules/modal.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Modal)\n/* harmony export */ });\nclass Modal {\r\n  constructor() {\r\n    this.ModalAbrir = document.querySelector('[data-modal=\"abrir\"]');\r\n    this.ModalCOntainer = document.querySelector(\"[data-modal='container']\");\r\n    this.ModalFechar = document.querySelector('[data-modal=\"fechar\"]');\r\n    this.Form = document.querySelector('.modal form');\r\n    this.ShowSenha = document.querySelector('.ShowSenha input');\r\n    this.senhaInput = document.querySelector('input[type=\"password\"]');\r\n    this.eventToggleModal = this.eventToggleModal.bind(this);\r\n    this.showSenha = this.showSenha.bind(this);\r\n    this.clickForaModal = this.clickForaModal.bind(this);\r\n  }\r\n\r\n  abriModal(e) {\r\n    e.preventDefault();\r\n    this.ModalCOntainer.classList.add('ativo');\r\n  }\r\n\r\n  fecharModal(e) {\r\n    e.preventDefault();\r\n    this.ModalCOntainer.classList.remove('ativo');\r\n  }\r\n\r\n  toggleModal() {\r\n    this.ModalCOntainer.classList.toggle('ativo');\r\n  }\r\n\r\n  eventToggleModal(e) {\r\n    e.preventDefault();\r\n    console.log(this);\r\n    this.toggleModal();\r\n  }\r\n\r\n  clickForaModal(e) {\r\n    console.log(this.ModalCOntainer);\r\n    if (e.target === this.ModalCOntainer) this.ModalCOntainer.classList.remove('ativo');\r\n  }\r\n\r\n  showSenha() {\r\n    console.log(this.senhaInput);\r\n    if (this.ShowSenha.checked) this.senhaInput.setAttribute('type', 'text');\r\n    else this.senhaInput.setAttribute('type', 'password');\r\n  }\r\n\r\n  EventListeners() {\r\n    this.ModalCOntainer.addEventListener('click', this.clickForaModal);\r\n\r\n    this.ModalAbrir.addEventListener('click', this.eventToggleModal);\r\n\r\n    this.ModalFechar.addEventListener('click', this.eventToggleModal);\r\n\r\n    this.Form.addEventListener('submit', this.fecharModal);\r\n\r\n    this.ShowSenha.addEventListener('click', this.showSenha);\r\n  }\r\n\r\n  init() {\r\n    if (this.ModalCOntainer && this.ModalFechar && this.ModalAbrir) {\r\n      this.EventListeners();\r\n    }\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/modal.js?");

/***/ }),

/***/ "./js/modules/scrollSuave.js":
/*!***********************************!*\
  !*** ./js/modules/scrollSuave.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass ScrollSuave {\n  constructor(links, options) {\n    if (options === undefined) {\n      this.options = {\n        block: 'start',\n        behavior: 'smooth',\n      };\n    } else this.options = options;\n    this.navItems = document.querySelectorAll(links);\n    this.scrollToSection = this.scrollToSection.bind(this);\n  }\n\n  scrollToSection() {\n    this.navItems.forEach((itemNav) => {\n      const id = itemNav.getAttribute('href');\n\n      itemNav.addEventListener('click', (e) => {\n        e.preventDefault();\n        const section = document.querySelector(`${id}`);\n        section.scrollIntoView(this.options);\n      });\n    });\n  }\n\n  init() {\n    if (this.navItems.length) return null;\n    this.navItems.forEach((link) => {\n      link.addEventListener('click', this.scrollToSection);\n    });\n    return null;\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ScrollSuave);\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/scrollSuave.js?");

/***/ }),

/***/ "./js/modules/tollTip.js":
/*!*******************************!*\
  !*** ./js/modules/tollTip.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Tolltip)\n/* harmony export */ });\nclass Tolltip {\n  constructor(tolltips) {\n    this.Tolltips = document.querySelectorAll(tolltips);\n    this.onMouseover = this.onMouseover.bind(this);\n    this.onMouseLeave = this.onMouseLeave.bind(this);\n    this.mouseMove = this.mouseMove.bind(this);\n  }\n\n  mouseMove(event) {\n    this.tollTipBox.style.top = `${event.pageY + 20}px`;\n    this.tollTipBox.style.left = `${event.pageX + 20}px`;\n  }\n\n  onMouseLeave({ currentTarget }) {\n    this.tollTipBox.remove();\n    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);\n    currentTarget.removeEventListener('mousemove', this.mouseMove);\n  }\n\n  onMouseover({ currentTarget }) {\n    this.criarTollBox(currentTarget);\n\n    currentTarget.addEventListener('mousemove', this.mouseMove);\n    currentTarget.addEventListener('mouseleave', this.onMouseLeave);\n  }\n\n  criarTollBox(element) {\n    const tollTipBox = document.createElement('div');\n    const Text = element.getAttribute('aria-label');\n    tollTipBox.classList.add('TollTip');\n    tollTipBox.innerHTML = Text;\n    document.body.appendChild(tollTipBox);\n    this.tollTipBox = tollTipBox;\n  }\n\n  addEventListenerr() {\n    this.Tolltips.forEach((tolltip) => {\n      tolltip.addEventListener('mouseover', this.onMouseover);\n    });\n  }\n\n  init() {\n    if (this.Tolltips.length) this.addEventListenerr();\n    return this;\n  }\n}\n\n\n//# sourceURL=webpack://eslint---animais/./js/modules/tollTip.js?");

/***/ }),

/***/ "./js/script.js":
/*!**********************!*\
  !*** ./js/script.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/scrollSuave.js */ \"./js/modules/scrollSuave.js\");\n/* harmony import */ var _modules_anima_oSroll_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/animaçãoSroll.js */ \"./js/modules/animaçãoSroll.js\");\n/* harmony import */ var _modules_crodiao_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/crodiao.js */ \"./js/modules/crodiao.js\");\n/* harmony import */ var _modules_ShowDesc_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/ShowDesc.js */ \"./js/modules/ShowDesc.js\");\n/* harmony import */ var _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modal.js */ \"./js/modules/modal.js\");\n/* harmony import */ var _modules_tollTip_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/tollTip.js */ \"./js/modules/tollTip.js\");\n/* harmony import */ var _modules_DorpDownMenu_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/DorpDownMenu.js */ \"./js/modules/DorpDownMenu.js\");\n/* harmony import */ var _modules_menu_Mobile_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/menu-Mobile.js */ \"./js/modules/menu-Mobile.js\");\n/* harmony import */ var _modules_Funcionamento_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/Funcionamento.js */ \"./js/modules/Funcionamento.js\");\n/* harmony import */ var _modules_FetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/FetchAnimais.js */ \"./js/modules/FetchAnimais.js\");\n/* harmony import */ var _modules_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/bitcoinFetch.js */ \"./js/modules/bitcoinFetch.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst ScrollSuavew = new _modules_scrollSuave_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('a[href^=\"#\"]');\r\nScrollSuavew.init();\r\n\r\nconst acordiao = new _modules_crodiao_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"]('.faq-lista dt');\r\nacordiao.initAcordiao();\r\n\r\nconst modall = new _modules_modal_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"]();\r\nmodall.init();\r\n\r\nconst tolltip = new _modules_tollTip_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"]('[data-tollTip=\"Tolltip\"]');\r\ntolltip.init();\r\n\r\n(0,_modules_menu_Mobile_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\r\n(0,_modules_anima_oSroll_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n(0,_modules_ShowDesc_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\r\n(0,_modules_bitcoinFetch_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\r\n(0,_modules_DorpDownMenu_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\r\n(0,_modules_Funcionamento_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\r\n\r\n(0,_modules_FetchAnimais_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])('../../AnimaisApi.json', '.numeros-grid');\r\n\n\n//# sourceURL=webpack://eslint---animais/./js/script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./js/script.js");
/******/ 	
/******/ })()
;
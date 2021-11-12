import ScrollSuave from './modules/scrollSuave.js';
import ScrollAnima from './modules/animaçãoSroll.js';
import Cordiao from './modules/crodiao.js';
import ShowDesc from './modules/ShowDesc.js';
import Modal from './modules/modal.js';
import Tolltip from './modules/tollTip.js';
import DropDownMenuS from './modules/DorpDownMenu.js';
import MenuMobile from './modules/menu-Mobile.js';
import FuncionamentoEstabelecimento from './modules/Funcionamento.js';
import fetchAnimais from './modules/FetchAnimais.js';
import FetchBit from './modules/bitcoinFetch.js';

const ScrollSuavew = new ScrollSuave('a[href^="#"]');
ScrollSuavew.init();

const acordiao = new Cordiao('.faq-lista dt');
acordiao.initAcordiao();

const modall = new Modal();
modall.init();

const tolltip = new Tolltip('[data-tollTip="Tolltip"]');
tolltip.init();

const ScrollAnimacao = new ScrollAnima('.js-scroll');
ScrollAnimacao.init();

const DropDownMen = new DropDownMenuS('[data-dropDown]');
DropDownMen.init();

const menuMobil = new MenuMobile('[data-menu="lista"]', '[data-menu="button"]');
menuMobil.init();

const Working = new FuncionamentoEstabelecimento('.dados', '[data-Semana]');
Working.init();

ShowDesc();

FetchBit('https://blockchain.info/ticker', '.BitCoin span');
fetchAnimais('../../AnimaisApi.json', '.numeros-grid');

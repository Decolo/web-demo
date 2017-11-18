/** 首页功能 **/
import 'babel-polyfill'; //We are using --save instead of --save-dev this time, as these libraries will be used in runtime. 
//We also use babel-polyfill so that ES2015 APIs are available in older browsers.
import $ from 'jquery';
import Carousel from '../com/auto-Carousel';
import Tab from '../com/simple-tab.js';
import ClickLoad from '../com/clickload.js'
import GoTop from '../com/goTop.js';

$(document).ready(() => {
  // Tab init
  Tab.init($('.navbar'))
  // Carousel init
  Carousel.init($('.carousel'), 400, 3000)
  // GoTop init
  new GoTop(200)
  // ClickLoad init
  ClickLoad.init($('.load-more'))
})










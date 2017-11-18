import $ from 'jquery'
import WaterFall from './waterFall.js'

const ClickLoad = function($ct) {
  function _ClickLoad($ct) {
    this.$ct = $ct
    this.bindEvent()
    this.curPage = 1
    this.perPageCount = 6
    this.isDataArrived = true
  }
  _ClickLoad.prototype.bindEvent = function() {
    this.$ct.on('click', () => {
      this.getImg()
    })
  }
  _ClickLoad.prototype.getImg = function() {
    $.ajax({
      url: 'https://platform.sina.com.cn/slide/album_tech?',
      type: 'get',
      dataType: 'jsonp',
      jsonp: 'jsoncallback',
      data: {
        app_key: '1271687855',
        num: this.perPageCount,
        page: this.curPage
      },
      success: ret => {
        if (ret.status.code === '0') {
          this.render(ret.data)
          this.curPage++;
          this.isDataArrived = true
        }
      },
      error: function() {
        console.log('fail to get data')
      }
    })
    this.isDataArrived = false
  }
  _ClickLoad.prototype.render = function (newsList) {
    $.each(newsList, (idx, news) => {
      var $node = this.getNode(news)
      $node.find('img').on('load', function() {
        $('.category .category-list').append($node)
        WaterFall($node)
      })
    })
  }
  _ClickLoad.prototype.getNode = function(obj) {
    let tpl =
        '<li class="mock">' +
        '<a href="#">' +
        '<div class="list-cover">' +
        '<svg class="icon" aria-hidden="true">' +
        '<use xlink:href="#icon-gengduo"></use>' +
        '</svg>' +
        '</div>' +
        '<img src="' + obj.img_url + '" alt="' + obj.img_count + '"/>' +
        '</a>' +
        '<h3>' + obj.name + '</h3>' +
        '<p>' + obj.short_intro + '</p>' +
        '</li>'

    return $(tpl)
  }  
  return {
    init: function($ct) {
      $ct.each((index, item) => {
        new _ClickLoad($ct)
      })
    }
  }
}()

module.exports = ClickLoad
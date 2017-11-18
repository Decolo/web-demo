
let $ = require('../lib/jquery.js')
const Carousel = (function() {
  function _Carousel($ct, delay, autoDelay) {
    this.delay = delay
    this.autoDelay = autoDelay
    this.$ct = $ct
    this.init()
    this.bind()
    // this.autoPlay()
  }
  _Carousel.prototype.init = function() {
    this.imgWidth = this.$ct.find('.container-img li').eq(0).width()
    this.$btnPre = this.$ct.find('.button.pre')
    this.$btnNext = this.$ct.find('.button.next')
    this.$ctImg = this.$ct.find('.container-img')
    this.numberOfImg = this.$ctImg.find('li').length
    // this.$ctImg.width(this.imgWidth * this.numberOfImg)
    this.$bullet = this.$ct.find('.bullet')
    this.currentIndex = 0
    this.isAnimate = false

    var $firstLiClone = this.$ctImg.find('li').first().clone()
    var $lastLiClone = this.$ctImg.find('li').last().clone()

    this.$ctImg.append($firstLiClone)
    this.$ctImg.prepend($lastLiClone)

    this.$ctImg.css({
      left: -this.imgWidth
    })

    this.loadImg()
  }
  _Carousel.prototype.loadImg = function() {
    let imgs = this.$ct.find('.img')
    $(imgs).each((index, item) => {
      if (index !== 1) {
        console.log('src')
        let dataSrc = $(item).attr('data-src')
        $(item).attr('src', dataSrc)
      }
    })
  }
  _Carousel.prototype.bind = function() {
    let _this = this

    let imgs = this.$ct.find('.img')
    this.countLoad = 0
    $(imgs).each((index, item) => {
      if (index !== 1) {
        $(item).on('load', event => {
          if (++this.countLoad >= imgs.length - 1) {
            // 所有图片加载完成开始轮播
            this.autoPlay()
          }
        })    
      }
    })

    this.$btnPre.on('click', function(e) {
      e.preventDefault()
      _this.stopPlay()
      if (!_this.isAnimate) {
        _this.playPre(1)
      }
    })

    this.$btnNext.on('click', function(e) {
      e.preventDefault()
      _this.stopPlay()
      if (!_this.isAnimate) {
        _this.playNext(1)
      }
    })
    
    this.$bullet.on('click', 'li', function(e) {
      let pageNumber = $(e.target).index() - _this.currentIndex
      if (pageNumber > 0) {
        _this.playNext(pageNumber)
      } else if (pageNumber < 0) {
        _this.playPre(-pageNumber)
      }

    })
  }

  _Carousel.prototype.playPre = function(n) {
    let _this = this
    this.isAnimate = true
    this.$ctImg.animate({
      left: '+=' + this.imgWidth * n
    }, this.delay, function() {
      _this.currentIndex -= n
      _this.isAnimate = false
      if (_this.currentIndex < 0) {
          _this.$ctImg.css({
              left: -_this.imgWidth * _this.numberOfImg
          })
          _this.currentIndex += _this.numberOfImg
      }
      _this.setBullet()
    })
  }

    _Carousel.prototype.playNext = function(n) {
        var _this = this
        this.isAnimate = true
        this.$ctImg.animate({
          left: '-=' + this.imgWidth * n
        }, this.delay, function() {
          _this.isAnimate = false
          _this.currentIndex += n
          if (_this.currentIndex === _this.numberOfImg) {
            _this.$ctImg.css({
              left: -_this.imgWidth
            })
            _this.currentIndex -= _this.numberOfImg
          }
            _this.setBullet()
        })
    }

    _Carousel.prototype.setBullet = function() {
      this.$bullet.children().removeClass('active').eq(this.currentIndex).addClass('active')
    }

    _Carousel.prototype.autoPlay = function() {
      var _this = this
      this.clock = setInterval(function() {
        _this.playNext(1)
      }, this.autoDelay)
    }
    _Carousel.prototype.stopPlay = function() {
      clearInterval(this.clock)
    }

    return {
      init: function($ct, delay, autoDelay) {
        $ct.each(function(idx, node) {
          new _Carousel($(node), delay, autoDelay)
        })
      }
    }
})()

module.exports = Carousel
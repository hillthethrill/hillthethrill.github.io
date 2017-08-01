'use strict'

var $header = document.querySelector('.header')

var throttle = function (callback, delay) {
  var last = null
  var timer = null

  return function () {
    var now = +new Date()

    if (last && now < last + delay) {
      window.clearTimeout(timer)
      timer = window.setTimeout(function () {
        last = now
        callback()
      }, delay)
    } else {
      last = now
      callback()
    }
  }
}

var scrollHandler = function () {
  if (window.pageYOffset) {
    $header.classList.add('active-header')
  } else {
    $header.classList.remove('active-header')
  }
}

window.addEventListener('scroll', throttle(scrollHandler, 25))

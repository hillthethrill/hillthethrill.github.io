'use strict'

var $header = document.querySelector('.header')
var $links = document.querySelectorAll('.navigation__item')

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

$links.forEach(function (element) {
  element.addEventListener('click', function () {
    $links.forEach(function (element) { element.classList.remove('is-active') })
    element.classList.add('is-active')
  })
})

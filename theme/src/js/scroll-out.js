import { EventBus } from './event-bus'

let scrollOut = document.querySelector('.scroll-out')
let nav = document.querySelector('.nav')
let items = Array.from(document.querySelectorAll('.nav-item:not(.mobile)'))

if (scrollOut) {
  window.addEventListener('scroll', onScroll)
  EventBus.$once('swiped', onScroll)

  function onScroll(event) {
    scrollOut.classList.add('fade-out')
    setTimeout(() => {
      scrollOut.parentElement.removeChild(scrollOut)
      nav.classList.add('underline-in')
      nav.parentElement.classList.add('transition-background')

      setTimeout(() => {
        let delay = 0
        items.forEach((item) => {
          item.style.animationDelay = delay + 'ms'
          item.style.opacity = 0
          item.classList.remove('hidden')
          item.classList.add('fade-in')
          delay += 100
        })
      }, 200)
    }, 500)

    window.removeEventListener('scroll', onScroll)
  }
}

//

setTimeout(() => {

  let resizers = Array.from(document.querySelectorAll('.scroll-size'))

  if (resizers.length > 0) {
    EventBus.$once('swiped', onScroll)

    window.addEventListener('scroll', onScroll)

    function onScroll(event) {
      resizers.forEach((resizer) => {
        resizer.classList.add('active')

        setTimeout(() => {
          resizer.style.transition = 'none'
        }, 2000)
      })

      window.removeEventListener('scroll', onScroll)
    }
  }


//

let scrollColors = Array.from(document.querySelectorAll('.scroll-color'))

scrollColors.forEach((scrollColor) => {
  EventBus.$once('scrolled', (event) => {
    scrollColor.classList.add('active')
  })

  EventBus.$once('swiped', (event) => {
    scrollColor.classList.add('active')
  })
})

//

let scrollOverlays = Array.from(document.querySelectorAll('.scroll-overlay'))

scrollOverlays.forEach((scrollOverlay) => {
  EventBus.$once('scrolled', (event) => {
    scrollOverlay.classList.add('fade-out')

    setTimeout(() => {
      scrollOverlay.parentElement.removeChild(scrollOverlay)
    }, 500)
  })
})

//

let scrollSaturates = Array.from(document.querySelectorAll('.scroll-saturate'))

scrollSaturates.forEach((scrollSaturate) => {
  EventBus.$once('scrolled', (event) => {
    scrollSaturate.classList.remove('desaturate')
  })

  EventBus.$once('swiped', (event) => {
    scrollSaturate.classList.remove('desaturate')
  })
})

}, 500)
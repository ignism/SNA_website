import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper/dist/js/swiper.js'

document.addEventListener('DOMContentLoaded', (event) => {
  let swipers = Array.from(document.getElementsByClassName('swiper-section'))

  swipers.forEach((swiper) => {
    let container = swiper.querySelector('.swiper-container')

    let instance = new Swiper(container, {
      loop: true,
      threshold: 20,
      effect: swiper.getAttribute('data-effect'),
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        // el: swiper.querySelector('.swiper-pagination')
      },
      navigation: {
        nextEl: swiper.querySelector('.swiper-next'),
        prevEl: swiper.querySelector('.swiper-prev')
      }
    })

    let count = swiper.querySelector('.swiper-count')
    if (count) {
      instance.on('slideChangeTransitionEnd', () => {
        let index = instance.realIndex + 1
        let total = instance.slides.length - 2
        count.innerHTML = index + '/' + total
      })
    }

    let pagination = swiper.querySelector('.swiper-custom-pagination')
    if (pagination) {
      let items = Array.from(pagination.querySelectorAll('.pagination-item'))

      instance.on('slideChangeTransitionStart', () => {
        items.forEach((item) => {
          item.classList.remove('active')
          console.log('..removing', item.getAttribute('data-swiper-target'))
          if (
            parseInt(item.getAttribute('data-swiper-target')) ==
            parseInt(instance.realIndex + 1)
          ) {
            item.classList.add('active')
            console.log('adding...', item.getAttribute('data-swiper-target'))
          }
        })
      })

      items.forEach((item) => {
        let target = item.getAttribute('data-swiper-target')
        let label = swiper.querySelector('.swiper-label')

        item.addEventListener('click', (event) => {
          if (item.classList.contains('link-click')) {
            //
          } else {
            // console.log('tick')
            // //event.preventDefault()
            // if (!item.classList.contains('active')) {
            //   // items.forEach((_item) => {
            //   //   _item.classList.remove('active')
            //   // })
              instance.slideTo(target)

            //   if (label) {

            //   }
            // }
          }
        })

        if (item.classList.contains('trigger-hover')) {
          item.addEventListener('mouseenter', (event) => {
            if (!item.classList.contains('active')) {
              items.forEach((_item) => {
                _item.classList.remove('active')
              })
              instance.slideTo(target)

              if (label) {
                label.querySelector('.label-left').textContent =  item.getAttribute('data-label-left')
                label.querySelector('.label-right').textContent =  item.getAttribute('data-label-right')
              }
            }
          })
        }
      })
    }
  })
})

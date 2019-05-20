import 'swiper/dist/css/swiper.css'
import Swiper from 'swiper'

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
        el: swiper.querySelector('.swiper-pagination')
      },
      navigation: {
        nextEl: swiper.querySelector('.swiper-next'),
        prevEl: swiper.querySelector('.swiper-prev')
      }
    })

    let count = swiper.querySelector('.swiper-count') 
    if (count) {
      instance.on('slideChangeTransitionEnd', () => {
        console.log(instance.realIndex, instance.slides.length)
        let index = instance.realIndex + 1
        let total = instance.slides.length - 2
        count.innerHTML = index + '/' + total
      })
    }

    let pagination = swiper.querySelector('.swiper-custom-pagination')
    if (pagination) {
      let items = Array.from(pagination.querySelectorAll('.pagination-item'))

      items.forEach((item) => {
        let target = item.getAttribute('data-swiper-target')

        item.addEventListener('click', (event) => {
          if (!item.classList.contains('active')) {
            items.forEach((_item) => {
              _item.classList.remove('active')
            })
            item.classList.add('active')
            instance.slideTo(target)
          }
        })
      })
    }
  })
})

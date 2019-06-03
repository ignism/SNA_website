import { EventBus } from './event-bus'

EventBus.$on('init', () => {
  let wrappers = Array.from(document.querySelectorAll('.catch-hover-wrapper'))

  wrappers.forEach((wrapper) => {
    console.log(wrapper)
    let catchers = wrapper.querySelectorAll('.catch-hover')

    catchers.forEach((catcher) => {
      catcher.addEventListener('mouseenter', (event) => {
        catchers.forEach((_catcher) => {
          _catcher.classList.add('hover')
        })
      })

      catcher.addEventListener('mouseleave', (event) => {
        catchers.forEach((_catcher) => {
          _catcher.classList.remove('hover')
        })
      })
    })
  })
})

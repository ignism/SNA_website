import { EventBus } from './event-bus.js'

EventBus.$on('init', () => {
  let loader = document.querySelector('#loader')

  if (loader) {
    console.log('init loader')
    loader.classList.add('fade-out')
    document.body.classList.remove('is-loading')

    setTimeout(() => {
      loader.style.display ='none'
      loader.parentNode.removeChild(loader)
    }, 500);
  }
})

// document.addEventListener('DOMContentLoaded', (event) => {
//   let loader = document.querySelector('#loader')

//   if (loader) {
//     loader.classList.add('fade-out')
//     document.body.classList.remove('is-loading')

//     setTimeout(() => {
//       loader.style.display ='none'
//       loader.parentNode.removeChild(loader)
//     }, 500);
//   }
// })
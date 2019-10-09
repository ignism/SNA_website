import { EventBus } from './event-bus'

EventBus.$on('init', () => {
 
  let container = document.querySelector('.container-nav-mobile')
  
  if (container) {
    let burger = container.querySelector('.burger')
    
    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      container.classList.toggle('active')
    })
  }
})

EventBus.$once('scrolled', () => {
 
  let container = document.querySelector('.container-nav-mobile')
  
  if (container) {
    container.classList.add('scrolled')
  }
})
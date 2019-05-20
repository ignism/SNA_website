import { EventBus } from './event-bus.js'

window.addEventListener('load', (event) => {
  EventBus.$emit('init', event)
})

document.addEventListener('scroll', scrolled)
function scrolled(event) {
  EventBus.$emit('scrolled', event)
  document.removeEventListener('scroll', scrolled)
}

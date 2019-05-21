import { EventBus } from './event-bus'

EventBus.$on('init', () => {
  let elements = Array.from(document.querySelectorAll('.superscript'))

  elements.forEach(superscript => {
    superscript.parentElement.childNodes.forEach(child => {
      if (child.nodeType === Node.TEXT_NODE) {
        if (child.textContent.substr(-1, 1) !== '.') {
          superscript.style.marginLeft = '0.25em';
        }
      }
    })
  })
})
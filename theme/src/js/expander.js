import { EventBus } from './event-bus'

EventBus.$on('init', () => {
  let section = document.querySelector('.expander-section')

  if (section) {
    let items = Array.from(section.querySelectorAll('.pagination-item'))

    items.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.preventDefault()
        
        if (item.classList.contains('active')) {
          item.classList.remove('active')
        } else {
          items.forEach((_item) => {
            _item.classList.remove('active')
          })
          item.classList.add('active')
        }
      })
    })
  }
})

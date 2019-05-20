import { action, easing, tween, styler } from 'popmotion'
import zenscroll from 'zenscroll'

let footer = document.querySelector('.footer')
let footerFixed = document.querySelector('.footer-fixed')
let toggle = document.querySelector('.footer-toggle')
let close = document.querySelector('.footer-close')

window.onscroll = (event) => {
  if (!footer.classList.contains('active')) {
    if (window.scrollY > getDocumentHeight() - window.innerHeight - 300) {
      toggle.classList.add('active')
    } else {
      toggle.classList.remove('active')
    }
  }
}

function getDocumentHeight() {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  )
}

if (close) {
  close.addEventListener('click', (event) => {
    event.preventDefault()
    let documentHeight = getDocumentHeight()

    if (
      window.scrollY >
      documentHeight - window.innerHeight - footer.clientHeight
    ) {
      if (window.scrollY < documentHeight - window.innerHeight) {
        zenscroll.toY(documentHeight - window.innerHeight, 400, () => {})
      } else {
        zenscroll.toY(
          documentHeight -
            window.innerHeight -
            footer.clientHeight +
            footerFixed.clientHeight,
          400,
          () => {
            footer.style = ''
          }
        )
      }
    } else {
      footer.classList.remove('active')
      toggle.classList.remove('active')
      footer.style.position = 'fixed'

      tween({
        from: footer.clientHeight,
        to: 0,
        duration: 400,
        ease: easing.easeInOut
      }).start({
        update: (v) => {
          footer.style.top = 'calc(100vh - ' + v + 'px)'
        },
        complete: () => {
          footer.style = ''
        }
      })
    }
  })
}

if (toggle) {
  let footerStyler = styler(footer)

  toggle.addEventListener('click', (event) => {
    let documentHeight = getDocumentHeight()

    if (!toggle.classList.contains('disabled')) {
      toggle.classList.add('disabled')

      setTimeout(() => {
        toggle.classList.remove('disabled')
      }, 600)

      if (
        window.scrollY >
        documentHeight - window.innerHeight - footer.clientHeight
      ) {
        if (window.scrollY < documentHeight - window.innerHeight) {
          zenscroll.toY(documentHeight - window.innerHeight, 400, () => {})
        } else {
          zenscroll.toY(
            documentHeight -
              window.innerHeight -
              footer.clientHeight +
              footerFixed.clientHeight,
            400,
            () => {
              footer.style = ''
            }
          )
        }
      } else {
        if (!footer.classList.contains('active')) {
          footer.classList.add('active')
          toggle.classList.add('active')
          footer.style.position = 'fixed'

          tween({
            from: 0,
            to: footer.clientHeight,
            duration: 400,
            ease: easing.easeInOut
          }).start({
            update: (v) => {
              footer.style.top = 'calc(100vh - ' + v + 'px)'
            },
            complete: () => {}
          })
        } else {
          footer.classList.remove('active')
          toggle.classList.remove('active')
          footer.style.position = 'fixed'

          tween({
            from: footer.clientHeight,
            to: 0,
            duration: 400,
            ease: easing.easeInOut
          }).start({
            update: (v) => {
              footer.style.top = 'calc(100vh - ' + v + 'px)'
            },
            complete: () => {
              footer.style = ''
            }
          })
        }
      }
    }
  })
}

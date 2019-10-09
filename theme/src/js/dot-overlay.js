import * as P5 from 'p5/lib/p5.min.js'
import { EventBus } from './event-bus'

const containers = Array.from(document.querySelectorAll('.canvas-container'))

EventBus.$once('init', () => {
  containers.forEach((container) => {
    let p5 = new P5((sketch) => {
      sketch.setup = () => {
        sketch.frameRate(24)
        sketch.pixelDensity(2.0)
        let canvas = sketch.createCanvas(
          container.clientWidth,
          container.clientHeight
        )
        canvas.parent(container)
      }
    })

    p5.draw = () => {
      p5.clear()

      p5.noStroke()
      p5.fill('rgb(255, 90, 80)')

      drawDots(p5)
    }

    function pythag(p5, ellipseX, ellipseY) {
      let x = p5.mouseX
      let y = p5.mouseY

      if (x == NaN) {
        return 1
      } else {
        let leg1 = Math.abs(x - ellipseX)
        let leg2 = Math.abs(y - ellipseY)
        let pyth = Math.pow(leg1, 2) + Math.pow(leg2, 2)
        return Math.sqrt(pyth)
      }
    }

    function drawDots(p5) {
      for (let i = 20; i <= p5.width - 20; i += 20) {
        for (let j = 20; j <= p5.height - 20; j += 20) {
          let dist = pythag(p5, i, j)

          let max = 12
          let min = 2

          let size = 2 * (window.innerWidth * 0.5) / dist
          if (size > max) {
            size = max
          }
          if (size < min) {
            size = min
          }

          p5.ellipse(i, j, size, size)
        }
      }
    }

    window.addEventListener('resize', (event) => {
      p5.resizeCanvas(container.clientWidth, container.clientHeight, true)
    })
  })
})

EventBus.$once('scrolled', () => {
  containers.forEach(container => {
    container.classList.add('fade-out')
    container.classList.add('long')

    setTimeout(() => {
      // container.parentElement.removeChild(container)
    }, 2000)
  })
})

EventBus.$once('swiped', () => {
  containers.forEach(container => {
    container.classList.add('fade-out')
    container.classList.add('long')

    setTimeout(() => {
      // container.parentElement.removeChild(container)
    }, 2000)
  })
})
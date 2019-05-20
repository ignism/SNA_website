document.addEventListener('DOMContentLoaded', (event) => {
  let loader = document.querySelector('#loader')

  if (loader) {
    loader.classList.add('fade-out')
    document.body.classList.remove('is-loading')

    setTimeout(() => {
      loader.style.display ='none'
      loader.parentNode.removeChild(loader)
    }, 500);
  }
})
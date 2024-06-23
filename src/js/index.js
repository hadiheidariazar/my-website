const $ = document

const loader = $.querySelector('.loader')

window.addEventListener('load', () => {
    $.body.classList.remove('overflow-hidden')
    loader.classList.remove('flex')
    loader.classList.add('hidden')
})
const $ = document

const loader = $.querySelector('.loader')
const menuIcon = $.querySelector('.toggle-menu')
const phoneDeviceMenu = $.querySelector('.phone-menu')
const navbarItemLink = $.querySelectorAll('.scroll-section')

window.addEventListener('load', () => {
    $.body.classList.remove('overflow-hidden')
    loader.classList.remove('flex')
    loader.classList.add('hidden')
})

menuIcon.addEventListener('click', () => {
    phoneDeviceMenu.classList.toggle('hidden')

    $.addEventListener('click', (event) => {
        if (phoneDeviceMenu.classList[2] !== 'hidden') {
            if (event.target.classList[event.target.classList.length - 1] !== 'header-navbar') {
                phoneDeviceMenu.classList.add('hidden')
            }
        }
    })
})

function scrollToMainSection(targetElement) {
    const mainSectionLocation = $.querySelector(`section#${targetElement}`).offsetTop
    window.scrollTo({ top: (mainSectionLocation - 120), behavior: 'smooth' })
}

navbarItemLink.forEach(btn => {
    btn.addEventListener('click', () => scrollToMainSection(btn.getAttribute('id')))
})
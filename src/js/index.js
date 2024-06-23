const $ = document

const loader = $.querySelector('.loader')
const menuIcon = $.querySelector('.toggle-menu')
const phoneDeviceMenu = $.querySelector('.phone-menu')
const navbarItemLink = $.querySelectorAll('.scroll-section')
const toggleThemeBtn = $.querySelectorAll('.toggle-theme')
const technologyProjectDevelopedBtn = $.querySelectorAll('.technology-project-developed-btn')
const overlay = $.querySelector('.overlay')
const modalHiddenBtn = $.querySelector('.modal-hidden-btn')
const modalContent = $.querySelector('.modal-content')
const modalTitle = $.querySelector('.modal-title')

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

toggleThemeBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        if (localStorage.theme === "dark") {
            document.documentElement.classList.remove("dark");
            localStorage.theme = "light";
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
    })
})

technologyProjectDevelopedBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        showAndHiddenModal('remove')

        const projectClicked = btn.previousElementSibling.getAttribute('href')

        if (projectClicked.includes('lifesports')) {
            modalTitle.innerHTML = 'لایف اسپرت'
            modalContent.innerHTML = `
            <li> SCSS </li>
            <li> Bootstrap </li>
            <li> Javascript </li>
            <li> Swiper Js </li>
            `
        } else if (projectClicked.includes('proglearn')) {
            modalTitle.innerHTML = 'پروگ لرن'
            modalContent.innerHTML = `
            <li> SCSS </li>
            <li> Bootstrap </li>
            <li> React Js </li>
            <li> React-Bootstrap </li>
            <li> React-Router-Dom </li>
            <li> Swiper Js </li>
            `
        } else if (projectClicked.includes('goldencoffee')) {
            modalTitle.innerHTML = 'گلدن کافی'
            modalContent.innerHTML = `
            <li> Tailwind CSS </li>
            <li> React Js </li>
            <li> React-Router-Dom </li>
            <li> React-Paginate </li>
            <li> React-Hook-Form </li>
            <li> Redux </li>
            <li> Redux-Toolkit </li>
            <li> Swiper Js </li>
            `
        }
    })
})

overlay.addEventListener('click', () => showAndHiddenModal('toggle'))

modalHiddenBtn.addEventListener('click', () => showAndHiddenModal('toggle'))

function showAndHiddenModal(eventModal) {
    if (eventModal === 'toggle') {
        overlay.classList.toggle('overlay-hidden')
        overlay.parentElement.classList.toggle('modal-hidden')
    } else {
        overlay.classList.remove('overlay-hidden')
        overlay.parentElement.classList.remove('modal-hidden')
        $.body.classList.remove('overflow-hidden')
    }

    (overlay.parentElement.className.includes('modal-hidden') && overlay.className.includes('overlay-hidden')) ? $.body.classList.remove('overflow-hidden') : $.body.classList.add('overflow-hidden')
}
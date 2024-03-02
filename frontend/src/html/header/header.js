const header = document.getElementById('header')
const navigation = document.getElementsByTagName('ul')[0]
const navigationItems = document.querySelectorAll('ul li')
const menu = document.getElementById('menu')

menu.addEventListener('click',() => {
    const navigationClasses = ['absolute', 'flex-col', 'top-[100%]', 'hidden', 'left-1/2', '-translate-x-1/2', 'w-full', 'z-30']
    for (navigationClass of navigationClasses) {
        navigation.classList.toggle(navigationClass)
    }

    const navigationItemsClasses = ['leading-10', 'w-full', 'text-center', 'mr-0', 'mr-8', 'border-b-[1px]', 'border-gray-300']
    for (navigationItem of navigationItems) {
        for (itemClass of navigationItemsClasses) {
            navigationItem.classList.toggle(itemClass)
        }
    }
})


const theme = document.getElementById('theme')
let isLightTheme = true
const themeIcons = document.querySelectorAll('#theme img')
const accountIcons = document.querySelectorAll('#account img')
const menuIcons = document.querySelectorAll('#menu img')

theme.addEventListener('click', () => {
    if (isLightTheme) {
        // header.style.background ='linear-gradient(90deg, #c773fd,#3d0084)'
        // header.style.background = 'linear-gradient(0deg, #02d179,#00d175,#002332)'
        header.style.background ='linear-gradient(90deg, #8aa0c7,#5e6a9d,#30284e)'
    }
    else {
        header.style.background = 'linear-gradient(90deg, #8d90e3,#9ec0ea,#8d90e3)'
    }
    for (let i = 0; i < themeIcons.length; i++) {
        themeIcons[i].classList.toggle('hidden')
        accountIcons[i].classList.toggle('hidden')
        menuIcons[i].classList.toggle('hidden')
    }
    isLightTheme = !isLightTheme
})
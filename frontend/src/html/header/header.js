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

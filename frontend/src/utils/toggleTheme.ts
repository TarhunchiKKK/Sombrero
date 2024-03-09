export default function toggleTheme() {
    document.documentElement.classList.toggle('dark')
}

// export default function toggleTheme() {
//     // if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     //     document.documentElement.classList.add('dark')
//     // }  
//     // else {
//     //     document.documentElement.classList.remove('dark')
//     // }

//     if (localStorage.theme === 'light') {
//         localStorage.theme = 'dark'
//         document.documentElement.classList.add('dark')
//     }
//     else {
//         localStorage.theme = 'light'
//         document.documentElement.classList.remove('dark')
//     }
// }



//
// (function() {
//     let onpageLoad = localStorage.getItem("theme") || "";
//     let element = document.body;
//     element.classList.add(onpageLoad);
//     document.getElementById("theme").textContent =
//         localStorage.getItem("theme") || "light";
// })();
//
// function modechange() {
//     let element = document.body;
//     element.classList.toggle("dark-mode");
//
//     let theme = localStorage.getItem("theme");
//     if (theme && theme === "dark-mode") {
//         localStorage.setItem("theme", "");
//     } else {
//         localStorage.setItem("theme", "dark-mode");
//     }
//
//     document.getElementById("theme").textContent = localStorage.getItem("theme");
// }
//

const button = document.querySelector('button')
const userTheme = localStorage.getItem('theme')
let status = false

// 처음 이용객의 테마를 읽음
document.addEventListener('DOMContentLoaded', () => {
    if (userTheme === 'dark') {
        clickDarkMode()
    } else if (userTheme === 'light') {
        clickLightMode()
    }
})

// 버튼클릭
button.addEventListener('click', () => {
    if (status === false) {
        clickDarkMode()
    } else if (status === true) {
        clickLightMode()
    }
})

// 다크/라이트 전환이벤트
function clickDarkMode() {
    localStorage.setItem("theme", "dark")
    button.innerText='Light'
    document.documentElement.setAttribute('data-theme', 'dark')
    status = true
}
function clickLightMode() {
    localStorage.setItem("theme", "light")
    button.innerText='Dark'
    document.documentElement.setAttribute('data-theme', 'light')
    status = false
}
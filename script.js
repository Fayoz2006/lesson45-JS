let plus_btn = document.querySelector(`.plus`)
let bottom_panel = document.querySelector(`.bottom-panel`)
let exit_btn = document.querySelector(`.exit`)

plus_btn.onclick = () => {
    bottom_panel.classList.toggle(`active`)
    plus_btn.classList.toggle(`plus_active`)
}

exit_btn.onclick = () => {
    bottom_panel.classList.remove(`active`)
    plus_btn.classList.remove(`plus_active`)
}
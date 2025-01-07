function openPage(){
    window.location.href = "https://twitter.com/gordao_ns"
}
function openPage2(){
    window.location.href = "https://www.instagram.com/gordaons/"
}
function openPage3(){
    window.location.href = "https://www.twitch.tv/gordaons1"
}
function openPage4(){
    window.location.href = "https://tiktok.com/@gordaons1"
}
function switchDark(){
    const div1 = document.getElementById('main-top-frame');
    const div2 = document.getElementById('main-mid-frame');
    const header = document.getElementById('header');
    const button = document.getElementById('darkmode-switch');
    const body = document.getElementById('body');
    const footer = document.getElementById('footer');
    div1.classList.toggle('escuro');
    div2.classList.toggle('escuro');
    header.classList.toggle('header-escuro');
    button.classList.toggle('escuro-button');
    body.classList.toggle('body-color');
    footer.classList.toggle('escuro');
    if (button.classList.contains('escuro-button')){
        
    }
}
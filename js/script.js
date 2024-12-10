// popup code
let poppup_main = document.getElementById('poppup_main')
let close = document.getElementById('close')
let modal_btn = document.getElementById('modal_btn')
let popup_inner = document.getElementById('popup-inner')

modal_btn.onclick = function(){
    poppup_main.style.opacity = '1'
    poppup_main.style.zIndex = '1'
    popup_inner.style.top = '50%'
    popup_inner.style.transform = 'translate(-50%,-50%)'
}

close.onclick = function(){
     poppup_main.style.opacity = '0'
     poppup_main.style.zIndex = '-1'
     popup_inner.style.top = '25%'
     popup_inner.style.transform = 'translateX(-50%)'
}
const list = document.getElementById('navlist')
const icons = document.querySelectorAll('#icons')
const feature = document.getElementById('feature')
const chkit = document.getElementById('checkro')


function mycall() {
    let screenwith = window.innerWidth;
    if (screenwith < 750 ) {
        list.style.display= 'none'
        feature.style.display = 'flex'
        let hukid =[...icons]
        hukid.forEach(function(mera) {
            mera.style.display= 'none'

            
        })
    }else{
        list.style.display ='flex'
        feature.style.display= 'none'
        icons.forEach(function(mera) {
            mera.style.display= 'flex'
    })
}}
window.addEventListener( 'resize',mycall)
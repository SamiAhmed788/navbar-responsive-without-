const navlist = document.getElementById('navlist')
const checkro = document.getElementById('checkro')
const icons = document.querySelectorAll('icons')
console.log(icons); 
const bar = document.getElementById("feature")

let chk = false


function myCall() {
    const balanceinwidth = window.innerWidth;
if (balanceinwidth <= 760) {
    navlist.style.display = "none"
    bar.style.display = "block"
    icons.forEach(function(val){
val.style.display= "flex"
chk = true
    )}
    
else{
    bar.style.display = "none"
    navlist.style.display = "flex"
    icons.forEach(function(val){
        val.style.display = "flex"
    })

}

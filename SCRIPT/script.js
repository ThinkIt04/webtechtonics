function menu(){
    document.getElementById('menu1').style.transform = "translateX(100%)";
}
function menux(){
    document.getElementById('menu1').style.transform = "translateX(0%)";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbx2KV-EZUTPe-WbxMSqg1O1H22TcizcjBW3MauczuSQazfKU3aG/exec';
const form = document.forms['google-sheet'];
const alt = document.getElementById("t-alert");
const eralt = document.getElementById("e-alert");
form.addEventListener('submit', e => {
        e.preventDefault()
        fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {alt.style.display = "block";})
            .catch(error => {eralt.style.display = "block";})
})
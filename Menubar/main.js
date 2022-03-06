const list = document.querySelector('.mainMenu');
const icon = document.querySelector('.icon');
const toggleBtn = document.querySelector('.toggle_btn').addEventListener('click', ()=>{
    list.classList.toggle('active');
    icon.classList.toggle('active');
});
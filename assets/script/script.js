
let btnChangeMenu = document.querySelector('#btnChangeMenu');

btnChangeMenu.addEventListener("click", () =>{
    document.body.classList.toggle('dark-theme');
    console.log('mudou');
})
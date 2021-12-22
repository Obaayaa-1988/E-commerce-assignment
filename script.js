

const container = document.querySelector('.search');

const btn1 = document.querySelector('button');

const input1 = document.querySelector('input');

//add eventlistner when clicked it toggles

btn1.addEventListener('click', () =>{
    container.classList.toggle('active')
    input1.focus();
})

const hamburger = document.querySelector('#hamburger');
const navLink = document.querySelector('#nav-ul');

hamburger.addEventListener('click', () => {
    navLink.classList.toggle('show');
});





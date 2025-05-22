const btn = document.querySelector('#btn-flag');
const txt = document.querySelector('#text-flag');

const actionBtn = ()=>{
    //Flag para ganar un punto en el parcial
    txt.innerHTML = 'Aquí no hay flag'
}

btn.addEventListener('click' , actionBtn);
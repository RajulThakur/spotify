document.querySelector('.js-close-button').addEventListener('click',()=>{
    document.querySelector('.js-bottom-bar').style.opacity=0;
    document.querySelector('.js-bottom-bar').innerHTML='';
    document.querySelector('.sidebar').style.bottom=0
    
})

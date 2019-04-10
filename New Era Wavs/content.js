var about = document.getElementById('btn-content-about');
var terms = document.getElementById('btn-content-terms');
var contact = document.getElementById('btn-content-contact');

document.querySelector('#btn-about').addEventListener('click',function (){
    if (about.style.display==='none'){
        about.style.display='block';
    }else{
        about.style.display='none';
    }
})

document.querySelector('#btn-terms').addEventListener('click',function (){
    if (terms.style.display==='none'){
        terms.style.display='block';
    }else{
        terms.style.display='none';
    }
})

document.querySelector('#btn-contact').addEventListener('click',function (){
    if (contact.style.display==='none'){
        contact.style.display='block';
    }else{
        contact.style.display='none';
    }
})
// function btn_about(){
    
//     if (about.style.display==='none'){
//         about.style.display='block';
//     }else{
//         about.style.display='none';
//     }
// }
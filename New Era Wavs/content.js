var about = document.getElementById('btn-content-about');
var terms = document.getElementById('btn-content-terms');
var contact = document.getElementById('btn-content-contact');

document.querySelector('#btn-about').addEventListener('click',()=>{
    if (about.style.visibility=='hidden'){
        about.style.visibility='visible';
        about.style.opacity='1';
    }else{
        about.style.visibility='hidden';
        about.style.opacity='0';
    }
});


document.querySelector('#btn-terms').addEventListener('click',()=>{
    if (terms.style.visibility=='hidden'){
        terms.style.visibility='visible';
        terms.style.opacity='1';
    }else{
        terms.style.visibility='hidden';
        terms.style.opacity='0';
    }
});

document.querySelector('#btn-contact').addEventListener('click',()=>{
    if (contact.style.visibility=='hidden'){
        contact.style.visibility='visible';
        contact.style.opacity='1';
    }else{
        contact.style.visibility='hidden';
        contact.style.opacity='0';
    }
});


// document.querySelector('#btn-about').addEventListener('click',toggleAbout());
// function btn_about(){
    
//     if (about.style.display==='none'){
//         about.style.display='block';
//     }else{
//         about.style.display='none';
//     }
// }


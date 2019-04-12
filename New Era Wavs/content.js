var about,terms,contact,btn_about,btn_terms,btn_contact;
about = document.getElementById('btn-content-about');
terms = document.getElementById('btn-content-terms');
contact = document.getElementById('btn-content-contact');
btn_about=document.getElementById("btn-about");
btn_terms=document.getElementById("btn-terms");
btn_contact=document.getElementById("btn-contact");

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


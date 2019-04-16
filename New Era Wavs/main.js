window.onload=function(){
    // Modal variables
    var modal, aboutBtn, termsBtn, contactBtn, closeBtn;
    modal = document.getElementById("aboutModal");
    aboutBtn= document.querySelector("#btn-about");
    termsBtn= document.getElementById("termsBtn");
    contactBtn= document.getElementById("contactBtn");
    closeBtn = document.querySelector(".closeBtn");

    //  Click Listner
    function openModal(){
        modal.style.display='block';
    };

    function closeModal(){
        modal.style.display='none';
    };

    aboutBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);

    // Outside click listner
    window.addEventListener('click',outsideClick);

    function outsideClick(e){
        if(e.target==modal){
            modal.style.display='none';
        }
    }

}
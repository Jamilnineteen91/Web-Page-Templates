window.onload=function(){
    // Modal variables
    var aboutModal,termsModal, contactModal, aboutBtn, termsBtn, contactBtn, closeBtn;
    aboutModal = document.getElementById("aboutModal");
    termsModal = document.getElementById("termsModal");
    contactModal = document.getElementById("contactModal");
    aboutBtn= document.getElementById("aboutBtn");
    termsBtn= document.getElementById("termsBtn");
    contactBtn= document.getElementById("contactBtn");
    closeBtn = document.querySelector(".closeBtn");

    //  Modal functions
    function openAboutModal(){
        aboutModal.style.display='block';  
    };

    function closeAboutModal(){
        aboutModal.style.display='none';
    };

    function openTermsModal(){
        termsModal.style.display='block';
    };

    function closeTermsModal(){
        termsModal.style.display='none';
    };

    function openContactModal(){
        contactModal.style.display='block';
    };

    function closeContactModal(){
        contactModal.style.display='none';
    };

    aboutBtn.addEventListener('click', openAboutModal);
    closeBtn.addEventListener('click', closeAboutModal);

    termsBtn.addEventListener('click', openTermsModal);
    closeBtn.addEventListener('click', closeTermsModal);

    contactBtn.addEventListener('click', openContactModal);
    closeBtn.addEventListener('click', closeContactModal);
    

    // Outside click listner
    window.addEventListener('click',outsideClick);

    function outsideClick(e){
        if(e.target==aboutModal){
            aboutModal.style.display='none';
        }
        else if(e.target==termsModal){
            termsModal.style.display='none';
        }else{
            contactModal.style.display='none';
        }
    }

}
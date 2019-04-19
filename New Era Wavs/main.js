window.onload=function(){
    // Modal variables
    var aboutModal,termsModal, contactModal, aboutBtn, termsBtn, contactBtn, closeAboutBtn,closeTermsBtn,closeContactBtn;
    aboutModal = document.getElementById("aboutModal");
    termsModal = document.getElementById("termsModal");
    contactModal = document.getElementById("contactModal");
    aboutBtn= document.getElementById("aboutBtn");
    termsBtn= document.getElementById("termsBtn");
    contactBtn= document.getElementById("contactBtn");
    closeAboutBtn = document.querySelector("#closeAboutBtn");
    closeTermsBtn = document.querySelector("#closeTermsBtn");
    closeContactBtn = document.querySelector("#closeContactBtn");

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

    // Event Listeners
    aboutBtn.addEventListener('click', openAboutModal);
    closeAboutBtn.addEventListener('click', closeAboutModal);

    termsBtn.addEventListener('click', openTermsModal);
    closeTermsBtn.addEventListener('click', closeTermsModal);

    contactBtn.addEventListener('click', openContactModal);
    closeContactBtn.addEventListener('click', closeContactModal);
    

    // Outside click listner
    window.addEventListener('click',outsideClick);

    function outsideClick(e){
        if(e.target==aboutModal){
            aboutModal.style.display='none';
        }
        else if(e.target==termsModal){
            termsModal.style.display='none';
        }else if(e.target==contactModal){
            contactModal.style.display='none';
        }
    }

}
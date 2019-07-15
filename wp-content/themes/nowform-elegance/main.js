
function makeImagesClickable(){
    if(document.querySelector('.story-single')){
        let storyImages = document.querySelectorAll('.story-single .entry-content img');
        for (var i = 0; i < storyImages.length; i++) {
            storyImages[i].addEventListener('click', function(event) {
                console.log(this.currentSrc);		
                document.querySelector('.ps-popup-image-modal').classList.add('visible');
                document.querySelector("#ps-popup-image").src = this.currentSrc;
            });
        }
    }
}
(function(){
    let oldScroll = document.scrollingElement.scrollTop;
    window.addEventListener("scroll",function(){
        if(document.scrollingElement.scrollTop > 50){
            document.querySelector(".ps-header").classList.add('scrolled');
        }else{
            document.querySelector(".ps-header").classList.remove('scrolled');
        }

        if(oldScroll < document.scrollingElement.scrollTop){
            document.querySelector(".ps-header").classList.remove('slide');
        }
        else{
            document.querySelector(".ps-header").classList.add('slide');
        }
        
        oldScroll = document.scrollingElement.scrollTop;

    });
}())

function fadeImages(){
    const images = document.querySelectorAll(".ps-fade-image");
    if(images){
        for(let i = 0; i < images.length; i++){
            setTimeout(() => {
                images[i].classList.add('loaded');
            }, 0);
        }
    }
}

function initialiseInputs(){
    console.log(this);
    let inputs = document.querySelectorAll('.ps-contact-form input');
    for(let i = 0; i < inputs.length; i++){
        inputs[i].addEventListener('focus',function(){
            this.parentElement.parentElement.classList.add('focused');
        })
        inputs[i].addEventListener('blur',function(){
            this.parentElement.parentElement.classList.remove('focused');
            if(this.value.length != 0){
                this.parentElement.parentElement.classList.add('touched');
            }
        })
        if(inputs[i].value.length != 0){
            inputs[i].parentElement.parentElement.classList.add('touched');
        }
    }
    let textareas = document.querySelectorAll('.ps-contact-form textarea');
    for(let i = 0; i < textareas.length; i++){
        textareas[i].addEventListener('focus',function(){
            this.parentElement.parentElement.classList.add('focused');
        })
        textareas[i].addEventListener('blur',function(){
            this.parentElement.parentElement.classList.remove('focused');
            if(this.value.length != 0){
                this.parentElement.parentElement.classList.add('touched');
            }
        })
        if(textareas[i].value.length != 0){
            textareas[i].parentElement.parentElement.classList.add('touched');
        }
    }
    
}
function toggleMenu(){
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.main-navigation').classList.toggle('mobile-active');
}

window.addEventListener('load', function() {
    makeImagesClickable();
})
window.addEventListener('load', function() {
    fadeImages();
    initialiseInputs();
})
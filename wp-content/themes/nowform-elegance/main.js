
function makeImagesClickable(){
    if(window.innerWidth < 768){
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
            else{   
                this.parentElement.parentElement.classList.remove('touched');
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
            }else{
                this.style.height = '32px';       
                this.parentElement.parentElement.classList.remove('touched');
            }
        })
        if(textareas[i].value.length != 0){
            textareas[i].parentElement.parentElement.classList.add('touched');
            textareas[i].style.minHeight = textareas[i].scrollHeight + 1 + 'px';          
        }
        textareas[i].addEventListener('keyup',function(){
            // this.style.height = '30px';      
            if(this.scrollHeight < 200){
                // this.style.height = '2px';          
                this.style.minHeight = this.scrollHeight + 1 + 'px';          
            } 
        })
    }
    
}
function toggleMenu(){
    document.querySelector('.menu-toggle').classList.toggle('active');
    document.querySelector('.main-navigation').classList.toggle('mobile-active');
}

window.addEventListener('load', function() {
    fadeImages();
    initialiseInputs();
    makeImagesClickable();
})


window.addEventListener('DOMContentLoaded', function() {
    // fadeImagesSingles();
    const images = document.querySelectorAll(".lazyloadme img");
    if(images){
        for(let i = 0; i < images.length; i++){
                images[i].classList.add('lazy-load');
        }
    }
    var myElements = document.querySelectorAll(".lazyloadme img");
    lozad(myElements, { 
        rootMargin: "0px 0px",
        loaded: function (el) {
            el.classList.add("is-loaded");
        }
    }).observe();
})
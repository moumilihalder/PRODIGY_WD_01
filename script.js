document.addEventListener('DOMContentLoaded',function(){
    const navbar= document.getElementById('navbar');

    window.addEventListener('scroll',function(){
        if(window.scroll > 50){
            navbar.style.backgroundColor = 'hsl(184, 77%, 42%)';
            navbar.style.color = 'hsl(184, 77%, 42%)';
        }else{
            navbar.style.backgroundColor='hsl(184, 77%, 42%)';
            navbar.style.color = 'hsl(184, 77%, 42%)';
        }
    });
});
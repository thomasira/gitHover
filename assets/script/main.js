window.addEventListener('DOMContentLoaded', function(){
    
    const elMain = document.querySelector('main');

    let hoverSize = 400,
        hoverColor = 'red',
        card = new Card(elMain.querySelector('[data-js-card'), hoverSize, hoverColor, '0.4', 200);

    let cardPosition = card._el.getBoundingClientRect();


    card._el.addEventListener('mousemove', function(e){


        card.isHovered(true, (e.pageY-cardPosition.top-hoverSize/2), (e.pageX-cardPosition.left-hoverSize/2));

    })  
    card._el.addEventListener('mouseout', function(){

        card.isHovered(false)

    })


})
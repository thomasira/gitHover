window.addEventListener('DOMContentLoaded', function(){
    
    const elMain = document.querySelector('main'),
        elsCard = elMain.querySelectorAll('[data-js-card]'),
        aCards = [];

    let hoverSize = '600',
        hoverColor = 'rgb(0, 255, 21)',
        hoverOpacity = '.2',
        hoverBlur = '200px';
    
        for (let i = 0; i < elsCard.length; i++) {
            
            aCards[i] = new Card(elsCard[i], hoverSize, hoverColor, hoverOpacity, hoverBlur);

            aCards[i]._el.addEventListener('mousemove', function(e){

                const cardPosition = elsCard[i].getBoundingClientRect();

                aCards[i].isHovered(true, (e.pageY-cardPosition.top-hoverSize/2), (e.pageX-cardPosition.left-hoverSize/2));

            })  
            aCards[i]._el.addEventListener('mouseout', function(){
        
                aCards[i].isHovered(false)
        
            })


        }
        console.log(aCards)




















        /* card = new Card(elMain.querySelector('[data-js-card'), hoverSize, hoverColor, hoverOpacity, hoverBlur); */

    



/* 
    let cardPosition = card._el.getBoundingClientRect();


    card._el.addEventListener('mousemove', function(e){


        card.isHovered(true, (e.pageY-cardPosition.top-hoverSize/2), (e.pageX-cardPosition.left-hoverSize/2));

    })  
    card._el.addEventListener('mouseout', function(){

        card.isHovered(false)

    }) */


})
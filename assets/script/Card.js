
class Card{
    constructor(el, size, color, opacity, blur){
        this._el = el;
        this._opacity = opacity;

        this._el.innerHTML = `<div data-js-hover></div><div data-js-content></div>`;

        this._hover = this._el.querySelector('[data-js-hover]');
        this._content = this._el.querySelector('[data-js-content]');

        this._el.style.borderRadius = `20px`;
        this._el.style.perspective = `700px`;

        this._hover.style.width = `${size}px`;
        this._hover.style.height = `${size}px`;
        this._hover.style.opacity = `0`;
        this._hover.style.zIndex = `1`;
        this._hover.style.borderRadius = `100%`;
        this._hover.style.position = `absolute`;
        this._hover.style.backgroundColor = color;
        this._hover.style.filter = `blur(${blur})`;

        this._content.style.border = `1px solid rgba(220, 220, 220, 0.8)`;
        this._content.style.width = `100%`;
        this._content.style.height = `100%`;
        this._content.style.zIndex = `-1`;
        this._content.style.borderRadius = `20px`;
        this._content.style.backgroundColor = `rgb(41, 41, 56)`;
    

    }
    isHovered(bool, top, left){
        if(bool){
            this._content.style.transform = `rotateX(11deg) rotateY(11deg)`;
            this._hover.style.top = `${top}px`;
            this._hover.style.left = `${left}px`;
            this._hover.style.opacity = this._opacity;
            this._hover.style.transitionDuration = `.7s`;
            this._hover.style.transitionProperty = `opacity`;


            

        } else {
            this._hover.style.opacity = `0`;
        }    
    }
}

class Card{
    constructor(el, size, color, opacity, blur){
        this._el = el;
        this._opacity = opacity;

        this._el.innerHTML = `<div data-js-hover></div>`;
        this._hover = this._el.querySelector('[data-js-hover]');

        this._hover.style.width = `${size}px`;
        this._hover.style.height = `${size}px`;
        this._hover.style.opacity = `0`;
        this._hover.style.borderRadius = `100%`;
        this._hover.style.position = `absolute`;
        this._hover.style.backgroundColor = color;
        this._hover.style.filter = `blur(${blur}px)`;
    }
    isHovered(bool, top, left){
        if(bool){
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
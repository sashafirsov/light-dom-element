import { CssChain as $ } from "css-chain";
import ShadowDomElement from "shadow-dom-element";
const attr = (el, name)=>el.getAttribute(name);

export default class LightDomElement extends ShadowDomElement
{
    applyTemplate( t )
    {   $( this ).template( t );
        const s = this;
        s.querySelectorAll('slot[attribute]').forEach( a =>
        {   let f = attr(a,'for')
            ,   s = f ? a.getRootNode().querySelector('#'+f) : a.parentElement;

            s.setAttribute( attr( a, 'attribute' )
                ,   a.assignedElements().map( l=>attr( l, 'href')
                                                 ||  attr( l, 'src')
                                                 ||  l.innerText).join(''))
        });

        return this;
    }

    attachShadow(){};
}

window.customElements.define('light-dom-element', LightDomElement);

import { CssChain as $ } from "css-chain";
import ShadowDomElement from "shadow-dom-element";
const attr = (el, name)=>el.getAttribute(name);

export default class LightDomElement extends ShadowDomElement
{
    applyTemplate( t )
    {   $( this ).template( t );
        this.postTemplateCallback( this );
        return this;
    }

    attachShadow(){};
}

window.customElements.define('light-dom-element', LightDomElement);

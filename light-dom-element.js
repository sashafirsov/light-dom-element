import { CssChain as $ } from "css-chain";
import ShadowDomElement from "shadow-dom-element";

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

import { LitElement, html, css, customElement, property, unsafeCSS } from 'lit-element';


// This decorator defines the element.
@customElement('b-placeholder')
export class Placeholder extends LitElement {

    @property()
    background = 'white';

    @property()
    color = 'black';

    @property()
    width = '100px';

    @property()
    height = '100px';

    static get styles() {
        return css`
        .background {
            padding: 0;
            margin: 0;
            width: 100px;
            height: 100px;
            border-style: solid;
        }
        .diag {
            background: ${unsafeCSS(this.generateSVG(`black`))};
            width: 100%; 
            height: 100%;
            background-repeat:no-repeat;
            background-position:center center;
            background-size: 100% 100%, auto;
        }
        `;
    }

    static generateSVG(fill: String = `black`): String {
        const svgData = `
        <svg xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='none'
        viewBox='0 0 100 100'>
        <path d='M1 0 L0 1 L99 100 L100 99' fill='${fill}'/>
        <path d='M0 99 L99 0 L100 1 L1 100' fill='${fill}'/>
        </svg>
        `;
        const svgUrl = `url("data:image/svg+xml;utf8,${svgData.replace(/(?:\r\n|\r|\n)/g, ' ')}")`;
        return svgUrl;
    }

    // Render element DOM by returning a `lit-html` template.
    render() {
        return html`
        <div class="background" style="
            background-color: ${this.background};
            border-color: ${this.color};
            width: ${this.width};
            height: ${this.height};
            ">
             <div class="diag" style="
             background-color: ${this.background};
             background: ${Placeholder.generateSVG(this.color)};
             ">
             </div>
        </div>
        `;
    }

}
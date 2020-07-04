var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var Placeholder_1;
import { LitElement, html, css, customElement, property, unsafeCSS } from 'lit-element';
// This decorator defines the element.
let Placeholder = Placeholder_1 = class Placeholder extends LitElement {
    constructor() {
        super(...arguments);
        this.background = 'white';
        this.color = 'black';
        this.width = '100px';
        this.height = '100px';
    }
    static get styles() {
        return css `
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
    static generateSVG(fill = `black`) {
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
        return html `
        <div class="background" style="
            background-color: ${this.background};
            border-color: ${this.color};
            width: ${this.width};
            height: ${this.height};
            ">
             <div class="diag" style="
             background-color: ${this.background};
             background: ${Placeholder_1.generateSVG(this.color)};
             ">
             </div>
        </div>
        `;
    }
};
__decorate([
    property()
], Placeholder.prototype, "background", void 0);
__decorate([
    property()
], Placeholder.prototype, "color", void 0);
__decorate([
    property()
], Placeholder.prototype, "width", void 0);
__decorate([
    property()
], Placeholder.prototype, "height", void 0);
Placeholder = Placeholder_1 = __decorate([
    customElement('b-placeholder')
], Placeholder);
export { Placeholder };
//# sourceMappingURL=placeholder.js.map
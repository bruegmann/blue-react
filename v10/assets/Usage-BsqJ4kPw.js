import{j as e,f as o,h as s,H as r}from"./index-BcsPFr1t.js";class u extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){this.render(),this.addEventListeners()}render(){if(!this.shadowRoot)return;const a=(document.documentElement.lang||navigator.language).startsWith("de")?"Seitenleiste umschalten":"Toggle sidebar";this.shadowRoot.innerHTML=`
            <style>
                :host {
                    --spacing: 0.25rem;
                    --drawer-side-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                        rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
                        rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
                    --toggler-size: calc(
                        var(--bs-btn-border-width, 1px) + var(--bs-btn-padding-y, 0.375rem) +
                            (var(--bs-btn-font-size, 1rem) * var(--bs-btn-line-height, 1.5)) +
                            var(--bs-btn-padding-y, 0.375rem) + var(--bs-btn-border-width, 1px)
                    );
                    --side-width: 18rem;
                    --base-z-index: 0;
                }

                .root {
                    position: relative;
                    display: grid;
                    height: 100%;
                    grid-template-columns:
                        0 var(--toggler-size) calc(var(--side-width) - var(--toggler-size))
                        auto;
                    grid-template-rows: var(--toggler-size) auto;
                }

                .hidden-input {
                    position: fixed;
                    --size: 0;
                    height: var(--size);
                    width: var(--size);
                    appearance: none;
                    opacity: 0;
                }

                .toggler {
                    grid-column-start: 2;
                }

                .hidden-input:focus-visible + .toggler ::slotted(*) {
                    --trigger-box-shadow: var(--trigger-focus-box-shadow, inset 0 0 0.25rem);
                }

                @media (width < 64rem) {
                    .toggler[for="layout-expand"] {
                        display: none;
                    }
                }

                @media (width >= 64rem) {
                    .toggler[for="layout-drawer"] {
                        display: none;
                    }
                }

                .header {
                    grid-column-start: 3;
                    grid-column-end: 5;
                }

                .side {
                    overflow: auto;
                }

                @media (width < 64rem) {
                    .side {
                        translate: -100% 0;
                        height: 100%;
                        transition: translate 0.2s ease;
                    }

                    #layout-drawer:checked ~ .side {
                        position: fixed;
                        top: 0;
                        left: 0;
                        z-index: calc(var(--base-z-index) + 1);
                        translate: 0;
                        width: calc(var(--spacing) * 80);
                        box-shadow: var(--drawer-side-shadow);
                    }
                }

                @media (width >= 64rem) {
                    #layout-expand:checked ~ .side {
                        grid-column-start: 2;
                        grid-column-end: 4;
                    }
                }

                .main {
                    overflow: auto;
                    grid-column-start: 2;
                    grid-column-end: 5;
                }

                @media (width >= 64rem) {
                    #layout-expand:checked ~ .main {
                        grid-column-start: 4;
                    }
                }

                .overlay {
                    position: fixed;
                    z-index: var(--base-z-index);
                    inset: 0;
                    display: none;
                }

                @media (width < 64rem) {
                    #layout-drawer:checked ~ .overlay {
                        display: block;
                    }
                }
            </style>

            <div class="root">
                <input
                    id="layout-expand"
                    type="checkbox"
                    class="hidden-input"
                    ${localStorage.getItem("side-layout-shrink")?"":"checked"}
                />
                <label class="toggler" for="layout-expand" title="${a}" role="button">
                    <slot name="expand-toggler">🍔</slot>
                </label>

                <input id="layout-drawer" type="checkbox" class="hidden-input" />
                <label class="toggler" for="layout-drawer" title="${a}" role="button">
                    <slot name="drawer-toggler">🍔</slot>
                </label>

                <header class="header"><slot name="header"></slot></header>
                <div class="side"><slot name="side"></slot></div>
                <main class="main"><slot></slot></main>
                <label aria-label="Close sidebar" for="layout-drawer" class="overlay"
                    ><slot name="overlay"></slot
                ></label>
            </div>
        `}addEventListeners(){if(!this.shadowRoot)return;this.shadowRoot.querySelector("#layout-expand").addEventListener("change",this.handleLayoutExpandChange.bind(this))}handleLayoutExpandChange(t){t.target.checked?localStorage.removeItem("side-layout-shrink"):localStorage.setItem("side-layout-shrink","true")}}customElements.define("side-layout",u);function l({children:i,header:t,noPageBorder:a=!1}){return e.jsxs("div",{className:"vh-100 d-grid",style:{gridTemplateRows:"var(--blue-menu-item-height) auto"},children:[e.jsx(o,{slot:"header",children:t}),e.jsx(s,{noPageBorder:a,className:"overflow-hidden",children:i})]})}function n(){return e.jsx("div",{className:"bg-theme",children:e.jsx(l,{header:e.jsx(r,{appTitle:"My website"}),children:e.jsxs("div",{className:"container",children:[e.jsx("div",{className:"h1",children:"Hello World"}),e.jsx("p",{children:"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo"})]})})})}export{n as default};

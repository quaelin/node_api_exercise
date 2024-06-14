customElements.define(
    'web-petitions-count',
    class extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            this.innerHTML = `<div id="petitions-count">Already 2 petitions, and counting</div>`;
        }
    }
);

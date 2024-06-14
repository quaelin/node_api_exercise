customElements.define(
    'web-petitions-count',
    class extends HTMLElement {
        constructor() {
            super();
        }

        async connectedCallback() {
            const petitions = await fetch('/petitions').then((response) =>
                response.json()
            );
            this.innerHTML = `<div id="petitions-count">Already ${petitions.length} petitions, and counting</div>`;
        }
    }
);

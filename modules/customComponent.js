customElements.define('custom-component', class CustomComponent extends HTMLElement {
    static get observedAttributes() {
        return ['src'];
    }

    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    async render(src) {
        try {
            const response = await fetch(src);
            if (!response.ok) throw new Error('Network response was not ok');
            const content = await response.text();
            console.log(content);

            this.shadowRoot.innerHTML = content;
        } catch (error) {
            console.error('Failed to fetch content:', error);
        }
    }

    connectedCallback() {
        if (!this.hasAttribute('src')) {
            throw new Error('The src attribute is required for CustomComponent');
        }
        this.render(this.getAttribute('src'));
    }
})
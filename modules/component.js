class Component extends HTMLElement {
    constructor() {
        super(); // Always call super in constructor
    }

    connectedCallback() {
        const src = this.getAttribute('src'); // Get the "src" attribute

        if (src) {
            this.loadComponent(src);
        }
    }

    async loadComponent(src) {
        try {
            const response = await fetch(src); // Fetch the HTML file
            if (!response.ok) {
                console.error(`Failed to load component from ${src}`);
            }


             // Get the response as text
            this.innerHTML = await response.text(); // Insert the fetched HTML into the <component> tag
        } catch (error) {
            console.error(error);
        }
    }
}

// Define the custom element
customElements.define('js-component', Component);
class JsComponent extends HTMLElement {
    constructor() {
        super(); // Always call super in constructor
    }

    connectedCallback() {
        this.src = this.getAttribute('src'); // Get the "src" attribute

        if (!this.rendered) {
            this.render();
            this.rendered = true
        }
    }

    async render {
        try {
            const response = await fetch(this.src); // Fetch the HTML file
            console.log(response);
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
customElements.define('js-component', JsComponent);
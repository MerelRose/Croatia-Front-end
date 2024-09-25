export class Router {

    constructor() {
        this.routes = {
            '/': {
                page: 'CFE-home.html'
            },
            '/about': {
                page: 'CFE-about.html'
            },
            '/products/add': {

            },
            '/leon': {
                page: 'LeonTest.html'
            },

            '/product': {
                page: 'CFE-product-overview.html'
            },

            '/product-card': {
                page: 'components/CFE-product-card.html'
            }
        };

        // Bind the 'handleHashChange' method to the current class instance
        this.handleHashChange = this.handleHashChange.bind(this);

        // Listen to the hash change event
        window.addEventListener('hashchange', this.handleHashChange);

        // Handle the initial load
        this.handleHashChange();
    }

    handleHashChange() {
        // Get the current route from the hash, defaulting to '/' if empty
        const route = window.location.hash.slice(1) || '/';

        console.log(route);

        // Navigate to the route
        this.navigate(route);
    }

    async navigate(route) {
        console.log(route);
        if (!this.routes[route]) {
            return document.getElementById('app').innerHTML = '<h3>404 Not Found</h3>';
        }

        const res = await fetch('../pages/' + this.routes[route].page);

        // Update the content of the app div with the page content
        document.getElementById('app').innerHTML = await res.text();
    }
}
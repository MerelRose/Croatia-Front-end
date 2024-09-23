export class Router {

    constructor(){
        this.routes = {
            '/': {
                page: 'CFE-home.html'
            },
            '/about': {
                page: 'CFE-about.html'
            }
        };
    }

    async navigate(route) {
        if (!this.routes[route]) return document.getElementById('app').innerHTML = '<h3>404 not found</h3>';

        const res = await fetch('../pages/' + this.routes[route].page);

        window.history.pushState({}, '', route);
        document.getElementById('app').innerHTML = await res.text();
    }

    handlePopState() {
        this.navigate(window.location.pathname)
    }
}
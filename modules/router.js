export class Router {

    constructor(){
        this.routes = {
            '/': {
                page: 'CFE-home.html'
            }
        };
    }

    async get(route) {
        if (!route in this.routes) return '<h3>404 not found</h3>'

        const res = await fetch('../pages/' + this.routes[route].page);
        document.getElementById('app').innerHTML = await res.text();
    }

}
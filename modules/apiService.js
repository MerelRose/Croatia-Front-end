export class apiService {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }

    async request(endpoint, method = 'GET', data = null, headers = {}) {
        const url = `${this.baseUrl}${endpoint}`;
        const options = {
            method,
            headers: {
                'Content-Type': 'application/json',
                ...headers
            }
        };

        if (data) {
            options.body = JSON.stringify(data);  // Add data for POST/PUT requests
        }

        try {
            const response = await fetch(url, options);

            // Check if the response is successful (status code in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Parse the JSON response
            const result = await response.json();
            return result;
        } catch (error) {
            console.error("API request failed:", error);
            throw error;
        }
    }

    // Helper methods for common request types
    async get(endpoint, headers = {}) {
        return this.request(endpoint, 'GET', null, headers);
    }

    async post(endpoint, data, headers = {}) {
        return this.request(endpoint, 'POST', data, headers);
    }

    async put(endpoint, data, headers = {}) {
        return this.request(endpoint, 'PUT', data, headers);
    }

    async delete(endpoint, headers = {}) {
        return this.request(endpoint, 'DELETE', null, headers);
    }
}
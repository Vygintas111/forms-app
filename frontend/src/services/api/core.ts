const API_URL = import.meta.env.VITE_API_URL;

interface RequestOptions {
    headers?: HeadersInit;
    data?: any;
    body?: string;
    method?: string;
}

if(!API_URL){
    throw new Error('VITE_API_URL is not defined in env');
}

export class ApiCore {
    private async request(endpoint: string, options: RequestOptions = {}) {
        const token = localStorage.getItem('token');
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `Bearer ${token}` }),
            ...options.headers,
        };

        const normalizedEndpoint = endpoint.startsWith('/') ? endpoint : `/${endpoint}`;

        const response = await fetch(`${API_URL}/api${normalizedEndpoint}`, {
            ...options,
            headers,
            body: options.body ? options.body : options.method !== 'GET' ? JSON.stringify(options.data) : undefined
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || 'Request failed');
        return data;
    }

    protected get = (endpoint: string) => this.request(endpoint, { method: 'GET' });
    protected post = (endpoint: string, data: any) => this.request(endpoint, { method: 'POST', body: JSON.stringify(data) });
    protected put = (endpoint: string, data: any) => this.request(endpoint, { method: 'PUT', body: JSON.stringify(data) });
    protected delete = (endpoint: string) => this.request(endpoint, { method: 'DELETE' });
}
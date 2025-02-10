import {ApiCore} from "./core.ts";

interface LoginData {
    email: string;
    password: string;
}

interface RegisterData extends LoginData {
    email: string;
    password: string;
    name: string;
}

class AuthApi extends ApiCore {
    login = (data: LoginData) => this.post('/auth/login', data);
    register = (data: RegisterData) => this.post('/auth/register', data);
    getCurrentUser = () => this.get('/auth/me');
}

export const authApi = new AuthApi();
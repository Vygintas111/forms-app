import { ApiCore } from './core';

class UserApi extends ApiCore {
    updateProfile = (data: any) => this.put('/users/profile', data);
    updatePreferences = (data: any) => this.put('/users/preferences', data);
}

export const userApi = new UserApi();
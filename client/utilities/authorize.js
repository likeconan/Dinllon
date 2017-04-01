import Navigate from './navigate'
import storage from 'store2';
import store from '../store';

class Authorize {

    constructor() {
        this.token = storage.local('user_token');
    }

    setToken = (token) => {
        storage.local('user_token', token);
        this.token = token
    }
    getToken = () => {
        return this.token;
    }

    isLoginNav = (authorized) => {
        if (!authorized) {
            Navigate.goToLogin();
        }
    }
    getLoggedUserId = () => {
        return store.getState().user.loggedUser.uuid
    }
    
}

export default new Authorize();
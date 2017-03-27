import Navigate from './navigate'
import store from 'store2';

class Authorize {

    constructor() {
        this.token = null;
    }

    setToken = (token) => {
        debugger;
        store.local('user_token', token);
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

}

export default new Authorize();
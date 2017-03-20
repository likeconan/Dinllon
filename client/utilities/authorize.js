import Navigate from './navigate'
import store from 'store2';

class Authorize {

    constructor() {
        this.isAuthorize = true;
    }
    loggedUser = () => {
        
    }

    isLoginNav = (authorized) => {
        if (!authorized) {
            Navigate.goToLogin();
        }
    }

}

export default new Authorize();
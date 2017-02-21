import Navigate from './navigate'

class Authorize {

    constructor() {
        this.isAuthorize = true;
    }
    
    isLoginNav = (authorized) => {
        if (!authorized) {
            Navigate.goToLogin();
        }
    }

}

export default new Authorize();
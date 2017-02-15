import Navigate from './navigate'

class Authorize {
    isLogin = (authorized) => {
        if (!authorized) {
            Navigate.goToLogin();
        }
    }
}

export default new Authorize();
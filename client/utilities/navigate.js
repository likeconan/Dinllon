import { browserHistory } from 'react-router';

class Navigate {
    goToSocialLife() {
        const path = '/life';
        browserHistory.push(path);
    }
    toggleTopBack(pathname) {
        return pathname &&
            (pathname.indexOf('/life') >= 0);
    }
    goToLogin() {
        const path = '/login';
        browserHistory.push(path);
    }

}

var navigate = new Navigate();
module.exports = navigate;
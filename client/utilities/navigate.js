import { browserHistory } from 'react-router';
import store from 'store2';


class Navigate {
    goToSocialLife() {
        const path = '/life';
        browserHistory.push(path);
    }
    toggleTopBack(pathname) {
        return pathname &&
            (pathname.indexOf('/life') >= 0 || pathname.indexOf('/profile') >= 0);
    }
    goToLogin() {
        const path = '/login';
        browserHistory.push(path);
    }
    goToProfile(userid) {
        const path = '/profile';
        store.session('ss.profile.user.id', userid);
        browserHistory.push(path);
    }

}

var navigate = new Navigate();
module.exports = navigate;
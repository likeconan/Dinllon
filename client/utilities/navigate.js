import { browserHistory } from 'react-router';
import storage from 'store2';
import store from '../store';
import { showToast } from '../actions/toast.action'

class Navigate {
    goToSocialLife() {
        const path = '/life';
        browserHistory.push(path);
    }
    toggleTopBack(pathname) {
        var obj = {
            active: pathname && (pathname.indexOf('/life') >= 0 || pathname.indexOf('/profile') >= 0),
            mbActive: pathname && pathname.indexOf('/life') >= 0,
        };
        return obj;
    }
    goToLogin() {
        const path = '/login';
        browserHistory.push(path);
    }
    goToProfile(userId) {
        if (userId) {
            const path = '/profile';
            storage.session('ss.profile.user.id', userId);
            browserHistory.push(path);
        } else {
            store.dispatch(showToast({
                className: 'error-toast',
                message: 'profile_noexist'
            }))
        }
    }
    getCurrentPath() {
        return browserHistory.getCurrentLocation().pathname;
    }

}

var navigate = new Navigate();
module.exports = navigate;
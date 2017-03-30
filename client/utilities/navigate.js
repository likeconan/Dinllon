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
    goToProfile(userid) {
        if (userid) {
            const path = '/profile';
            storage.session('ss.profile.user.id', userid);
            browserHistory.push(path);
        } else {
            store.dispatch(showToast({
                className:'error-toast',
                message:'profile_noexist'
            }))
        }

    }

}

var navigate = new Navigate();
module.exports = navigate;
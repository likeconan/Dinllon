import { combineReducers } from 'redux';

import user from './user.reducer';
import socialStatus from './social-status.reducer';
import load from './load.reducer';
import imagesDialog from './images-dialog.reducer';

export default combineReducers({
    user,
    socialStatus,
    load,
    imagesDialog,
});
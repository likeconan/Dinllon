import { combineReducers } from 'redux';

import user from './user.reducer';
import socialLife from './social-life.reducer';
import load from './load.reducer';
import imagesDialog from './images-dialog.reducer';

export default combineReducers({
    user,
    socialLife,
    load,
    imagesDialog,
});
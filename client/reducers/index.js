import { combineReducers } from 'redux';

import user from './user.reducer';
import socialStatus from './social-status.reducer';
import load from './load.reducer';
import imagesDialog from './images-dialog.reducer';
import activity from './activity.reducer';
import toast from './toast.reducer';
import profile from './profile.reducer';
import joinactivity from './join-activity.reducer';


export default combineReducers({
    user,
    socialStatus,
    load,
    imagesDialog,
    activity,
    toast,
    profile,
    joinactivity,
});
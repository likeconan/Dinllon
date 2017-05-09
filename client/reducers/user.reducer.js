export default function reducer(state = {
    loginViewModel: {
        mobile: '',
        password: '',
        validatedMobile: false,
        validatedPassword: false
    },
    registerViewModel: {
        mobile: '',
        password: '',
        smsCode: '',
        validatedMobile: false,
        validatedPassword: false,
        validatedSMSCode: false
    },
    loggedUser: {},
    loggedUserData: {
        momentCount: 0,
        activityCount: 0,
        friendCount: 0,
        appraiseCount: 0,
        dislikeCount: 0,
        lateCount: 0
    },
    isAuthorize: false
}, action) {
    switch (action.type) {
        case 'USER_LOGIN_REGISTER':
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
        case 'EDIT_LOGIN_MOBILE':
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    mobile: action.payload.val,
                    validatedMobile: action.payload.isMobile
                }
            }
        case 'EDIT_LOGIN_PASSWORD':
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    password: action.payload.val,
                    validatedPassword: action.payload.isPassword
                }
            }
        case 'EDIT_REGISTER_MOBILE':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    mobile: action.payload.val,
                    validatedMobile: action.payload.isMobile
                }
            }
        case 'EDIT_REGISTER_PASSWORD':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    password: action.payload.val,
                    validatedPassword: action.payload.isPassword
                }
            }
        case 'EDIT_REGISTER_SMS':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    smsCode: action.payload.val,
                    validatedSMSCode: action.payload.isSMS
                }
            }
        case 'GET_USER_AUTHORIZE':
            return {
                ...state,
                loggedUser: action.payload.loggedUser,
                isAuthorize: action.payload.isAuthorize
            }
        case 'USER_LOGOUT':
            return {
                ...state,
                loggedUser: {},
                isAuthorize: false
            }
        case 'GET_USER_DATA':
            return {
                ...state,
                loggedUserData: action.payload,
            }
        default:
            return state;
    }
}
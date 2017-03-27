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
    isAuthorize: false
}, action) {
    switch (action.type) {
        case 'USER_LOGIN':
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
            break;
        case 'EDIT_LOGIN_MOBILE':
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    mobile: action.payload.val,
                    validatedMobile: action.payload.isMobile
                }
            }
            break;
        case 'EDIT_LOGIN_PASSWORD':
            return {
                ...state,
                loginViewModel: {
                    ...state.loginViewModel,
                    password: action.payload.val,
                    validatedPassword: action.payload.isPassword
                }
            }
            break;
        case 'EDIT_REGISTER_MOBILE':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    mobile: action.payload.val,
                    validatedMobile: action.payload.isMobile
                }
            }
            break;
        case 'EDIT_REGISTER_PASSWORD':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    password: action.payload.val,
                    validatedPassword: action.payload.isPassword
                }
            }
            break;
        case 'EDIT_REGISTER_SMS':
            return {
                ...state,
                registerViewModel: {
                    ...state.registerViewModel,
                    smsCode: action.payload.val,
                    validatedSMSCode: action.payload.isSMS
                }
            }
            break;
        case 'USER_REGISTER':
            return {
                ...state,
                loggedUser: action.payload,
                isAuthorize: true
            }
        default:
            return state;
    }
}
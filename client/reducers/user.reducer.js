export default function reducer(state = {
    loginViewModel: {
        mobile: '',
        password: '',
        validatedMobile: false,
        validatedPassword: false
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
        default:
            return state;
    }
}
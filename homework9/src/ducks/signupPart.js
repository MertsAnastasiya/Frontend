export const initialSignUpPartState = {
    isRegistration: false,
    secondName: '',
    birth: '',
    phone: '',
}

export const signupPart = (prevState = initialSignUpPartState, action) => {
    switch (action.type) {
        case 'isRegistration':
            return {
                ...prevState,
                isRegistration: action.payload,
            };
        case 'secondName':
            return {
                ...prevState,
                secondName: action.payload,
            };
        case 'birth':
            return {
                ...prevState,
                birth: action.payload,
            };
        case 'phone':
            return {
                ...prevState,
                phone: action.payload,
            };
        default:
            return {
                ...prevState,
            }
    }
}
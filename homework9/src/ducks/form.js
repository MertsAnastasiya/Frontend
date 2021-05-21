export const initialFormState = {
    name: '',
    email: '',
    password:'',
}

export const form = (prevState = initialFormState, action) => {
    switch (action.type) {
        case 'name':
            return {
                ...prevState,
                name: action.payload,
            };
        case 'email':
            return {
                ...prevState,
                email: action.payload,
            };
        case 'password':
            return {
                ...prevState,
                password: action.payload,
            };
        default:
            return {
                ...prevState,
            }
    }
}
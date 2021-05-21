export const initialLoginPartState = {
    isKeep: false,
}

export const loginPart = (prevState = initialLoginPartState, action) => {
    switch (action.type) {
        case 'isKeep':
            return {
                ...prevState,
                isKeep: action.payload,
            };
        default:
            return {
                ...prevState,
            }
    }
}
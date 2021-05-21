export const initialDeletePartState = {
    review: '',
    rate: 0,
}

export const deletePart = (prevState = initialDeletePartState, action) => {
    switch (action.type) {
        case 'review':
            return {
                ...prevState,
                review: action.payload,
            };
        case 'rate':
            return {
                ...prevState,
                rate: action.payload,
            };
        default:
            return {
                ...prevState,
            }
    }
}
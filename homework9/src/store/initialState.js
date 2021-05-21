import { initialFormState } from '../ducks/form';
import { initialLoginPartState } from '../ducks/loginPart';
import { initialDeletePartState } from '../ducks/deletePart';
import { initialSignUpPartState } from '../ducks/signupPart';

export const initialState = {
    form: initialFormState,
    loginPart: initialLoginPartState,
    deletePart: initialDeletePartState,
    signupPart: initialSignUpPartState,
};
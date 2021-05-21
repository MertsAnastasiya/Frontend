import { form } from '../ducks/form';
import { loginPart } from '../ducks/loginPart';
import { deletePart } from '../ducks/deletePart';
import { signupPart } from '../ducks/signupPart';
import { combineReducers } from 'redux';

export default combineReducers({
    form,
    loginPart,
    deletePart,
    signupPart,
})
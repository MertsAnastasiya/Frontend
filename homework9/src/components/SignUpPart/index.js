import React from 'react';
import { connect } from 'react-redux';

class SignUpPart extends React.Component {

    handleChangeCheckBox = (e) => {
        const { onCheckboxChange } = this.props;
        onCheckboxChange(e.target.checked, e.target.name);
    }

    handleChangeInput = (e) => {
        const { onInputChange } = this.props;
        onInputChange(e.target.value, e.target.name);
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("You registrated");
    }

    render() {
        const { isRegistration, secondName, birth, phone } = this.props;
        return (
            <div className="additional-part">
                <h3>Registration</h3>
                <p>
                    <input type="checkbox" className="custom-checkbox" id="scales" name="isRegistration" checked={isRegistration} onChange={this.handleChangeCheckBox} />
                    <label htmlFor="scales"></label>
                </p>
                <input name="secondName" type="text" id="secondName" value={secondName} placeholder="Second name" onChange={this.handleChangeInput} />
                <input name="birth" type="text" id="birth" value={birth} placeholder="Year of birthday" onChange={this.handleChangeInput} />
                <input name="phone" type="text" id="phone" value={phone} placeholder="Number of phone" onChange={this.handleChangeInput} />
                <button className="registration-button" onClick={this.handleClick}>Registration</button>
            </div>
        );
    }
}

const mapStateToProps = ({ signupPart }) => ({
    isRegistration: signupPart.isRegistration,
    secondName: signupPart.secondName,
    birth: signupPart.birth,
    phone: signupPart.phone,

});

const mapDispatchToProps = (dispatch) => ({
    onCheckboxChange: (value, name) =>
        dispatch({
            type: name,
            payload: value,
        }),
    onInputChange: (value, name) => 
        dispatch({
            type: name,
            payload: value,
        }),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignUpPart);
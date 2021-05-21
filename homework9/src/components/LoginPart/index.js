import React from 'react';
import { connect } from 'react-redux';

class LoginPart extends React.Component {

    handleChangeCheckBox = (e) => {
        const { onCheckboxChange } = this.props;
        onCheckboxChange(e.target.checked, e.target.name);
    }

    handleClick = (e) => {
        e.preventDefault();
        console.log("You are login");
    }

    render() {
        const { isKeep } = this.props;
        return (

            <div className="additional-part">
                <h3 className="additional-title">Login to your account</h3>
                <p>
                    <input name="isKeep" type="checkbox" className="custom-checkbox" id="keepLogged" checked={isKeep} onChange={this.handleChangeCheckBox} />
                    <label htmlFor="keepLogged">Keep me logged in</label>
                </p>
                <button className="login-button" onClick={this.handleClick}>Login</button>
            </div>

        );
    }
}

const mapStateToProps = ({ loginPart }) => ({
    isKeep: loginPart.isKeep,
});

const mapDispatchToProps = (dispatch) => ({
    onCheckboxChange: (value, name) =>
        dispatch({
            type: name,
            payload: value,
        })
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginPart);
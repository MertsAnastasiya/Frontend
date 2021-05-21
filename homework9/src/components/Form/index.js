import React from 'react';
import { connect } from 'react-redux';
// import '../Form/styles.css';

class Form extends React.Component {

    handleChange = (e) => {
        const { onInputChange } = this.props;
        onInputChange(e.target.value, e.target.name);
    }
    
    render() {
        const { name, email, password } = this.props;
        return (
            <form>
                <div className="main-part">
                    <input name="name" value={name} type="text" placeholder="Name" onChange={this.handleChange} />
                    <input name="email" value={email} type="text" placeholder="Email" onChange={this.handleChange} />
                    <input name="password" value={password} type="password" placeholder="Password" onChange={this.handleChange} />
                </div>
            </form>
        );
    }
}

const mapStateToProps = ({ form }) => ({
    name: form.name,
    email: form.email,
    password: form.password,
});

const mapDispatchToProps = (dispatch) => ({
    onInputChange: (value, inputName) =>
        dispatch({
            type: inputName,
            payload: value,
        })
})

export default connect(mapStateToProps, mapDispatchToProps)(Form);
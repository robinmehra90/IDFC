import React, {Component} from 'react';
import Modal from '../../common/Modal';
import Input from '../../common/Input';

class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            empID: '',
            emailID:''
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    buttonClick = () => {
        alert("Heisenberg")
    };
    render() {
        const { empID, emailID } = this.state;
        return(
            <div className="forgot-modal">
                <h4>Enter your employee ID and we’ll email you a password</h4>
                <Input
                    type="text" name="empID" value={empID}
                    placeholder="Enter Employee ID"
                    title="EMPLOYEE ID"
                    onChangeHandler={this.onChangeHandler}
                />
                <Input
                    type="password" name="emailID" value={emailID}
                    placeholder="Enter Email Id"
                    title="Email Id"
                    onChangeHandler={this.onChangeHandler}
                />
            </div>
        )
    }
}

export default ForgotPassword;


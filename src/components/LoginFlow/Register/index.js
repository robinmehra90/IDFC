import React, {Component} from 'react';
import Modal from '../../common/Modal';
import TextBox from '../../common/TextBox';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state={
            empID: '',
            password: '',
            confirmPassword:''
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    buttonClick = () => {
        alert("Heisenberg")
    };
    render() {
        const { empID, password, confirmPassword } = this.state;
        return(
            <Modal buttonText="Submit"
                   title="Register"
                   handleSubmit={this.buttonClick}
                   links={['Already registered' , 'login']}
            >
                <TextBox
                    type="text" name="empID" value={empID}
                    placeholder="Enter Employee ID"
                    title="EMPLOYEE ID"
                    onChangeHandler={this.onChangeHandler}
                />
                <TextBox
                    type="password" name="password" value={password}
                    placeholder="Enter Password"
                    title="Password"
                    onChangeHandler={this.onChangeHandler}
                />
                <TextBox
                    type="password" name="confirmPassword" value={confirmPassword}
                    placeholder="Enter Confirm Password"
                    title="Confirm Password"
                    onChangeHandler={this.onChangeHandler}
                />
            </Modal>
        )
    }
}

export default Register;


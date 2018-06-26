import React, {Component} from 'react';
import Input from '../../common/Input';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state={
            empID: '',
            oldPassword: '',
            newPassword:'',
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
        const { empID, oldPassword, newPassword , confirmPassword } = this.state;
        return(
            <div className="changepassword-modal">
                <Input
                    type="text" name="empID" value={empID}
                    placeholder="Enter Employee ID"
                    title="EMPLOYEE ID"
                    onChangeHandler={this.onChangeHandler}
                />
                <Input
                    type="password" name="oldPassword" value={oldPassword}
                    placeholder="Enter Old Passwod"
                    title="Old Password"
                    onChangeHandler={this.onChangeHandler}
                />
                <Input
                    type="password" name="newPassword" value={newPassword}
                    placeholder="Enter New Passwod"
                    title="New Password"
                    onChangeHandler={this.onChangeHandler}
                />
                <Input
                    type="password" name="confirmPassword" value={confirmPassword}
                    placeholder="Enter Confirm Password"
                    title="Confirm Password"
                    onChangeHandler={this.onChangeHandler}
                />
            </div>
        )
    }
}

export default ChangePassword;


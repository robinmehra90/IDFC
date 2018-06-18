import React, {Component} from 'react';
import Modal from '../../common/Modal';
import TextBox from '../../common/TextBox';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state={
            empID: '',
            password: ''
        }
    }
    onChangeHandler = (e) => {
        this.setState({[e.target.name]: e.target.value})
    };
    buttonClick = () => {
        alert("Heisenberg")
    };
    render() {
        const { empID, password } = this.state;
        return(
                <Modal buttonText="LOGIN"
                       title="Login"
                       handleSubmit={this.buttonClick}
                       links={['/forgotPassword', '/changePassword']}
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
                </Modal>
        )
    }
}

export default Login;


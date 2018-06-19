import React, {Component} from 'react';
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

    render() {
        const { empID, password } = this.state;
        return(
                <div className="login-modal">
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
                </div>
        )
    }
}

export default Login;


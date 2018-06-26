import React, {Component} from 'react';
import Button from '../../../components/common/Button';
import Input from '../../../components/common/Input';
import './styles.scss';

export default class AdminLogin extends Component {
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
    handleSubmit = () => {
        this.props.handleSubmit();
    };

    buttonClick = () => {
        alert("Heisenberg")
    };

    render() {
        const { empID, password } = this.state;
        return(
            <div className="admin-login">
                <h3>Admin Login</h3>
                <Input
                    type="text" name="empID" value={empID}
                    placeholder="Enter Employee ID"
                    title="EMPLOYEE ID"
                    onChangeHandler={this.onChangeHandler}
                />
                <Input
                    type="password" name="password" value={password}
                    placeholder="Enter Password"
                    title="Password"
                    onChangeHandler={this.onChangeHandler}
                />
                <Button onClick={this.handleSubmit}>Submit</Button>
            </div>
        )
    }
}
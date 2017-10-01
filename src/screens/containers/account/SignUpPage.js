import React, { Component } from 'react';
import {
    TextInput,
    Button
} from '../../components/index';

class SignUpPage extends Component {
    constructor(props, context) {
        super(props, context);
    }

    save = () => {
        alert('saved');
    }

    render() {
        return (
            <div className="row">
                <h2>Sing Up Page</h2>
                <div className="row">
                    <div className="col-lg-6">
                        <TextInput placeholder="Login" name="signupLogin" label="Login" value="vitor.ubukata"/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <Button label="Test" name="test" fullWidth onTouchTap={() => this.save()}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default (SignUpPage);
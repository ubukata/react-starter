import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TextInput extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            value: ''
        };
    }

    componentWillMount () {
        this.setState({ value: this.props.value});
    }

    onChange = (event) => {
        this.setState({ value: event.target.value});
    }

    onBlur = (event) => {
        console.log(event.target.value);
    }

    render() {
        const p = this.props;
        const s = this.state;

        console.log('RENDERED');

        return (
            <div className="form-group has-danger">
                <label className="form-control-label" htmlFor={p.name}>{p.label}</label>
                <input type="text"
                    className="form-control form-control-danger"
                    id={p.name}
                    name={p.name}
                    placeholder={p.placeholder}
                    value={s.value}
                    onChange={this.onChange}
                    onBlur={this.onBlur} />
                    <p className="error">The field {p.label} is required.</p>
            </div>
        );
    }
}

TextInput.propTypes = {
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired

};

export default (TextInput);
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        const p = this.props;

        return (
            <button type="button"
                    name={p.name}
                    className={`btn btn-primary btn-lg ${p.fullWidth === true ? 'btn-block' : null}`}
                    onTouchTap={p.onTouchTap}
                    >
                {p.label}
            </button>
        );
    }
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    fullWidth: PropTypes.bool
};

export default (Button);
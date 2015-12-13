import React, {Component} from 'react';

const Button = (props, context) => (
  <button onClick={props.handleClick.bind(props.handleClick, context.i18n, context.languages[props.isoCode])}>{props.label}</button>
);
Button.contextTypes = {
  i18n: React.PropTypes.object,
  languages: React.PropTypes.object
};

export default Button;

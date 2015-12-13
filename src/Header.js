import React, {Component} from 'react';

const Header = (props, context) => <h1>{props.literal}</h1>
Header.contextTypes = {
  i18n: React.PropTypes.object,
};

export default Header;

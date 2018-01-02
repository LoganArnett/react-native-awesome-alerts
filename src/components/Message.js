import React, {Component} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/MessageStyles';

export default class Message extends Component {

  _renderMessage = (message, style) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, style]}>{message}</Text>
      </View>
    );
  }

  render() {
    const {message, style} = this.props;
    const show = typeof message === 'string';

    if(show)
      return this._renderMessage(message, style);
    else
      return null;
  };
};

Message.propTypes = {
  message: PropTypes.string,
  style: PropTypes.object
};

import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/ButtonStyles';

export default class Button extends Component {

  _renderButton = (textStyle, containerViewStyle) => {
    const {text, backgroundColor} = this.props;
    const {onPress} = this.props;

    const containerStyle = {backgroundColor};

    return (
      <TouchableOpacity
        onPress={onPress}
          >
        <View style={[styles.container, containerStyle, containerViewStyle]}>
          <Text style={[styles.text, textStyle]}>{text}</Text>
        </View>
    </TouchableOpacity>
    );
  };

  render() {
    const {show, textStyle, containerStyle} = this.props;

    if(show)
      return this._renderButton(textStyle, containerStyle);
    else
      return null
  };
};

Button.propTypes = {
  show: PropTypes.bool,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  textStyle: PropTypes.object,
  containerStyle: PropTypes.object,
};

Button.defaultProps = {
  show: false
};

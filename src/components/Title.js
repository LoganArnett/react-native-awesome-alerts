import React, {Component} from 'react';
import {View, Text} from 'react-native';

import PropTypes from 'prop-types';

import styles from './styles/TitleStyles';

export default class Title extends Component {

  _renderTitle = (title, style) => {
    return (
      <View style={styles.container}>
        <Text style={[styles.text, style]}>{title}</Text>
      </View>
    );
  };

  render() {
    const {title, style} = this.props;
    const show = typeof title === 'string';

    if(show)
      return this._renderTitle(title, style);
    else
      return null;
  };
};

Title.propTypes = {
  title: PropTypes.string,
  style: PropTypes.object
};

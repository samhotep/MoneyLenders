import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/styles';

class GenericButton extends Component {
	render () {
		return(
			<TouchableOpacity style={[styles.genericButton, styles.shadow]}
				onPress={this.props.onPress}>
				<Text style={{color: 'white', fontSize: 16}}>{this.props.text}</Text>
			</TouchableOpacity>
		);
	}
}

export default withNavigation(GenericButton);
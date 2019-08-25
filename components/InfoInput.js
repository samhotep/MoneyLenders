import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from '../styles/styles';

export default class InfoInput extends Component {
	render () {
		return(
			<View style={styles.infoInput}>
				<Image source={this.props.image} style={styles.inputIcon}></Image>
				<TextInput placeholder={this.props.text} style={[styles.infoInputText, styles.inputSection]}></TextInput>
			</View>
		);
	}
}
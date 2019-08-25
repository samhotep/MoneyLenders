import React, {Component} from 'react';
import {Text, View} from 'react-native';
import styles from '../styles/styles';
import HomeCard from '../components/HomeCard';

export default class LoginBG extends Component {
	render () {
		return(
			<View style={styles.container}>
				<View style={styles.bgblock}>
				</View>
			</View>
		);
	}
}

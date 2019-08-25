import React, {Component} from 'react';
import {Text, View, Image, TextInput} from 'react-native';
import styles from '../styles/styles';

export default class Homecard extends Component {
	render() {
		return(
			<View style={[styles.homecard, styles.shadow]}>
				<Image source={require('../images/logo/main_logo.png')} style={styles.logoicon}>
        		</Image>
        		<View style={styles.searchbar}>
        			<TextInput placeholder="Search Accounts by Name" style={styles.inputText}></TextInput>    
				</View>
			</View>
		);
	}
}

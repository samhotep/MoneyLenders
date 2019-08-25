import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';

const user = [
	{'name': 'Thomas Hardy', 'active': '22'},
]

export default class EmployeePage2 extends Component{
	handlePress = () => {
		return "EmployeePage";
	}

	render () {
		return(
			<View style={styles.container}>
				<View style={[styles.infocard, styles.shadow]}>
					<View style={styles.infocardheader}>
						<Image source={require('../images/icons/customer_icon.png')} style={styles.itemlisticon}>
	        			</Image>
	        			<Text style={styles.itemlisttitle}>Employee Page</Text>
					</View>
					<View style={{flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
						<Text style={{fontSize: 24, color: 'red'}}>{user[0].name}</Text>
						<Text style={{fontSize: 24, color: 'black'}}>Active Accounts</Text>
						<Text style={{fontSize: 32, color: 'red'}}>{user[0].active}</Text>
					</View>
				</View>
				<GenericButton text="Logout" link={this.handlePress()}/>
			</View>
		);
	}
}
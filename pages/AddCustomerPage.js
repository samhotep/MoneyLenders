import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image} from 'react-native';
import AddCustomerPage from './AddCustomerPage';
import AddAccountPage from './AddAccountPage';
import { createStackNavigator } from 'react-navigation';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';

export default class EditInfoPage extends Component{
	handlePress = () => {
		return "AddAccountPage";
	}

	render () {
		return(
			<View style={styles.container}>
				<View style={[styles.infocard, styles.shadow]}>
					<View style={styles.infocardheader}>
						<Image source={require('../images/icons/customer_icon.png')} style={styles.itemlisticon}>
	        			</Image>
	        			<Text style={styles.itemlisttitle}>Customer Information</Text>
					</View>
					<InfoInput text="Name" image={require('../images/icons/my_account.png')}/>
					<InfoInput text="Contact" image={require('../images/icons/phone_icon.png')}/>
					<InfoInput text="Location" image={require('../images/icons/location_icon.png')}/>
					<InfoInput text="Account" image={require('../images/icons/id_icon.png')}/>
				</View>
				<GenericButton text="Add Account" link={this.handlePress()}/>
				<GenericButton text="Save"/>
			</View>
		);
	}
}

StackNavigator = createStackNavigator(
	{
		AddAccountPage: { screen: AddAccountPage },
	},
	{
		headerMode: 'none',
		mode: 'modal',
	}
);
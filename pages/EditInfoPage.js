import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';

export default class EditInfoPage extends Component{
	handlePress = () => {
		return "EditAccountPage";
	}

	render () {
		return(
			<View style={styles.container}>
				<View style={[styles.infocard, styles.shadow]}>
					<View style={styles.infocardheader}>
						<Image source={require('../images/icons/customer_icon.png')} style={styles.itemlisticon}>
	        			</Image>
	        			<Text style={styles.itemlisttitle}>Edit Customer Info</Text>
					</View>
					<InfoInput text="ehholl" image={require('../images/icons/my_account.png')}/>
					<InfoInput text="+256 7000000" image={require('../images/icons/phone_icon.png')}/>
					<InfoInput text="Kampala" image={require('../images/icons/location_icon.png')}/>
					<InfoInput text="Dolor sit amet" image={require('../images/icons/id_icon.png')}/>
				</View>
				<GenericButton text="Edit Account" link={this.handlePress()}/>
				<GenericButton text="Save"/>
			</View>
		);
	}
}
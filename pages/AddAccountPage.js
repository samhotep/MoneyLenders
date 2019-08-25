import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';

const categories = [
	{'label': 'Active', 'value': 'active'},
	{'label': 'Overdue', 'value': 'overdue'},
]

export default class AddAccountPage extends Component{
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			category: ''
		}
	}

	render () {
		return(
			<View style={styles.container}>
				<View style={[styles.infocard, styles.shadow]}>
					<View style={styles.infocardheader}>
						<Image source={require('../images/icons/customer_icon.png')} style={styles.itemlisticon}>
	        			</Image>
	        			<Text style={styles.itemlisttitle}>Add Account</Text>
					</View>
					<InfoInput text="ID Number" image={require('../images/icons/id_icon.png')}/>
					<InfoInput text="Amount" image={require('../images/icons/paper_money_icon.png')}/>
					<InfoInput text="Rate" image={require('../images/icons/percentage_icon.png')}/>
					<InfoInput text="Due" image={require('../images/icons/debt_icon.png')}/>
					<InfoInput text="Action" image={require('../images/icons/action_icon.png')}/>
					<InfoInput text="Status" image={require('../images/icons/status_icon.png')}/>
				</View>
				<GenericButton text="Save" link="#"/>
			</View>
		);
	}
}
import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';

//import { LoginContext } from '../store/login-context';
import { Consumer } from '../store/login-context';

export default class EmployeePage extends Component{

	handlePress = (loginStatus, toggleLoginStatus) => {
		if (loginStatus.loggedIn == false){
			return "EmployeePage2";
			toggleLoginStatus();
		}
		else {
			//return "EmployeePage"
		}
		//return "EmployeePage2";
	}

	check = (loggedIn) => {
		if (loggedIn == false){
			return "false";
		} else {
			return "true";
		}
	}

	render() {
		return(
			<View style={styles.container}>
				<View style={[styles.infocard, styles.shadow]}>
					<View style={styles.infocardheader}>
						<Image source={require('../images/icons/customer_icon.png')} style={styles.itemlisticon}>
	        			</Image>
	        			<Text style={styles.itemlisttitle}>Employee Page</Text>
					</View>
					<InfoInput text="Username" image={require('../images/icons/my_account.png')}/>
					<InfoInput text="Password" image={require('../images/icons/lock_icon.png')}/>
				</View>
				<GenericButton text={this.check(this.context.loggedIn)} link={this.context.toggleLoginStatus}/>
			</View>
		);
	}
}

const AComp = props => {
	<Consumer>
		{context => <EmployeePage {...props} context={context}/>}
	</Consumer>
};

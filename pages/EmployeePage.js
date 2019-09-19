import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image, Button} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLogin } from '../actions/UserActions';
//import users_url from '../routes';

const user = [
	{'name': 'Thomas Hardy', 'active': '22'},
]

class EmployeePage extends Component {

	handlePress = (state) => {
		state.props.toggleLogin(user[0].name);
		state.props.navigation.navigate("EmployeePage2")

		/*
		fetch('http://10.42.0.1:3000/44rewreoifhsksne8472AdiaDGBausers')
			.then(response => response.json())
				.then(users => console.warn(users))*/
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
				<GenericButton style={[styles.genericButton, styles.shadow]}
						text={'Login'} onPress={() => this.handlePress(this)}/>
			</View>
		);
	}
}
				//<GenericButton text={this.props.login.loginUser} link={this.handlePress()}/>

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		toggleLogin,
	}, dispatch)
);

const mapStateToProps = (state) => {
	const { login } = state
	return { login }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage);

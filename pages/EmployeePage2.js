import React, {Component} from 'react';
import {Text, View, ScrollView, ToolbarAndroid, FlatList, TouchableOpacity, Image} from 'react-native';
import InfoInput from '../components/InfoInput';
import GenericButton from '../components/GenericButton';
import styles from '../styles/styles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleLogin } from '../actions/UserActions';

const user = [
	{'name': 'Thomas Hardy', 'active': '22'},
]

class EmployeePage2 extends Component{
	handlePress = (state) => {
		state.props.toggleLogin("");
		state.props.navigation.navigate("EmployeePage")
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
						<Text style={{fontSize: 24, color: 'red'}}>{this.props.login.loginUser}</Text>
						<Text style={{fontSize: 24, color: 'black'}}>Active Accounts</Text>
						<Text style={{fontSize: 32, color: 'red'}}>{user[0].active}</Text>
					</View>
				</View>
				<GenericButton style={[styles.genericButton, styles.shadow]}
						text={'Logout'} onPress={() => this.handlePress(this)}/>
			</View>
		);
	}
}

const mapDispatchToProps = dispatch => (
	bindActionCreators({
		toggleLogin,
	}, dispatch)
);

const mapStateToProps = (state) => {
	const { login } = state
	return { login }
};

export default connect(mapStateToProps, mapDispatchToProps)(EmployeePage2);

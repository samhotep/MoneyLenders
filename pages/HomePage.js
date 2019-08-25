import React, {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import { createBottomTabNavigator} from 'react-navigation-tabs';
import styles from '../styles/styles';
import EditInfoPage from './EditInfoPage';
import EditAccountPage from './EditAccountPage';
import HomeBG from '../components/HomeBG';
import HomeCard from '../components/HomeCard';
import ItemList from '../components/ItemList';
import TabIcon from '../components/TabIcon';

import AddCustNav from '../navigation/AddCustNav';
import MyAccountNav from '../navigation/MyAccountNav';
//import { LoginContext, loginStatus } from '../store/login-context';
import { Provider } from '../store/login-context';

import { Alert } from 'react-native';

class HomePage extends Component {
	constructor(props){
		super(props);

		this.toggleLoginStatus = () => {
			return "EmployeePage2";
			/*this.setState( state => ({
				loggedIn: true,
			}));*/
			this.setState( state => {
				loggedIn: !this.state.loggedIn
			});
			//return "EmployeePage2";
			/*this.setState({
				loggedIn: !this.state.loggedIn
			});*/
			/*if (state.loggedIn == false){
				this.setState({
					loggedIn: true
				});
			} else if (state.loggedIn == true){
				this.setState({
					loggedIn: false
				});
			}*/
			/*this.setState(state => {
				loggedIn:
					state.loggedIn === loginStatus.loggedIn ? true: false;
				//return "EmployeePage2";
			})*/
		}

		this.state = {
			loggedIn: false,
			toggleLoginStatus: this.toggleLoginStatus,
		}

	}

	render () {
		return (
			<View style={styles.container}>
				<ScrollView>
					<View style={styles.bgblock}>
						<Text style={styles.title}>Money Lenders{this.state.loggedIn?"f":"t"}</Text>
						<HomeCard/>
					</View>					
					<ItemList/>
				</ScrollView>
			</View>
		);
	}
}

//HomePage.contextType = LoginContext;

const HomeNav = createStackNavigator(
	{
		Home: { screen: HomePage },
		EditInfo: { screen: EditInfoPage },
		EditAccountPage: { screen: EditAccountPage },
	},
	{
		headerMode: 'none',
		mode: 'modal',
	}
);

const TabNavigator = createBottomTabNavigator(
	{
		AddCustomer: { screen: AddCustNav },
		Home: { screen: HomeNav },
		MyAccount: { screen: MyAccountNav },
	},
	{
		initialRouteName: 'Home',
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: ({ focused, horizontal, tintColor }) => {
				const { routeName } = navigation.state;
				let defaultIcon;
				if ( routeName === 'Home' ) {
					if (focused) {
						return <TabIcon source={require('../images/icons/home_icon_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/icons/home_icon.png')} />;
					}
				} else if (routeName === 'AddCustomer'){
					if (focused) {
						return <TabIcon source={require('../images/icons/add_user_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/icons/add_user.png')} />;
					}
				} else if (routeName === 'MyAccount'){
					if (focused) {
						return <TabIcon source={require('../images/icons/my_account_selected.png')} />;
					} else {
						return <TabIcon source={require('../images/icons/my_account.png')} />;
					}
				}
			}
		}),
		tabBarOptions: {
			activeTintColor: 'blue',
			inactiveTintColor: 'black',
		},
});

const AppContainer = createAppContainer(TabNavigator);

export default class App extends Component{		
	render () {
		return (
			<Provider value={this.state}>
				<AppContainer/>
			</Provider>
		);
	}
}
				/*<View style={styles.bgblock}>
					<Text style={styles.title}>Money Lenders</Text>
					<HomeCard/>
				</View>
				<ItemList/>*/
/*{
						data.map((item, index) => (
							<View key={item.id}>
								<Text style={styles.testitem}>{item.name}, {item.id}</Text>
							</View>
						))
					}*/

import { createStackNavigator } from 'react-navigation';
import AddCustomerPage from '../pages/AddCustomerPage';
import AddAccountPage from '../pages/AddAccountPage';

export default createStackNavigator(
	{
		AddCustomerPage,
		AddAccountPage
	},
	{
		headerMode: 'none',
		mode: 'modal',
	}
);
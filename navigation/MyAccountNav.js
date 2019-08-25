import { createStackNavigator } from 'react-navigation';
import EmployeePage from '../pages/EmployeePage';
import EmployeePage2 from '../pages/EmployeePage2';

export default createStackNavigator(
	{
		EmployeePage,
		EmployeePage2
	},
	{
		headerMode: 'none',
		mode: 'modal',
	}
);
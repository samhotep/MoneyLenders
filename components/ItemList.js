import React, {Component} from 'react';
import {Text, View, Image, Picker} from 'react-native';
import styles from '../styles/styles';
import ItemCard from '../components/ItemCard';

const categories = [
	{'label': 'Name', 'value': 'name'},
	{'label': 'Amount', 'value': 'amt'},
	{'label': 'Due', 'value': 'due'},
	{'label': 'Status', 'value': 'status'},
]

const accounts = [
	{
		'name': 'John Stones',
		'amount': '5000', 
		'prate': '30%',
		'due': '12/03/19',
		'status': 'overdue'
	},
	{
		'name': 'Marcus T',
		'amount': '10000', 
		'prate': '30%',
		'due': '12/06/19',
		'status': 'overdue'
	},
	{
		'name': 'Kim S',
		'amount': '90000', 
		'prate': '30%',
		'due': '12/11/19',
		'status': 'paid'
	},
	{
		'name': 'Brenda N',
		'amount': '15000', 
		'prate': '30%',
		'due': '12/03/19',
		'status': 'paid'
	},
]

export default class ItemList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalVisible: false,
			category: ''
		}
	}

	render() {
		return(
			<View style={[styles.itemlist, styles.shadow]}>
				<View style={styles.itemlistheader}>
					<Image source={require('../images/icons/white_account_info_icon.png')} style={styles.itemlisticon}>
        			</Image>
        			<Text style={styles.itemlisttitle}>Account Details</Text>
				</View>
				<View style={styles.sortsection}>
					<Text style={{fontSize: 16}}>Sort by: </Text>
					<View style={styles.pickerstyle}>
	    				<Picker
	    					selectedValue={this.state.category}
	    					onValueChange={(itemValue, itemIndex) => 
	    						this.setState({category: itemValue})}>
	    					{categories.map((item, index) => (
	    						<Picker.Item key={index} label={item.label} value={item.value} />
							))}
	    				</Picker>
					</View>
				</View>
				{
					accounts.map((item, index) => (
						<ItemCard
							acct={item.name} 
							amt={item.amount} 
							perc={item.prate} 
							due={item.due} 
							status={item.status} />
					))
				}
			</View>
		);
	}
}

/*
<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
				<Text style={styles.testitem}>BLAH</Text>
*/
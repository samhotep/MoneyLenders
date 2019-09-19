import React, {Component} from 'react';
import {Text, View, Image, Picker} from 'react-native';
import styles from '../styles/styles';
import ItemCard from '../components/ItemCard';

const categories = [
	{'key': 1, 'label': 'Name', 'value': 'name'},
	{'key': 2, 'label': 'Amount', 'value': 'amt'},
	{'key': 3, 'label': 'Due', 'value': 'due'},
	{'key': 4, 'label': 'Status', 'value': 'status'},
]

const accounts = [
	{
		'key': 1,
		'name': 'John Stones',
		'amount': '5000', 
		'prate': '30%',
		'due': '12/03/19',
		'status': 'overdue'
	},
	{
		'key': 2,
		'name': 'Marcus T',
		'amount': '10000', 
		'prate': '30%',
		'due': '12/06/19',
		'status': 'overdue'
	},
	{
		'key': 3,
		'name': 'Kim S',
		'amount': '90000', 
		'prate': '30%',
		'due': '12/11/19',
		'status': 'paid'
	},
	{
		'key': 4,
		'name': 'Brenda N',
		'amount': '15000', 
		'prate': '30%',
		'due': '12/03/19',
		'status': 'paid'
	},
]

/*
const accounts2 = [
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
]*/

export default class ItemList extends Component {
	constructor(props) {
		super(props);
		newList = accounts.sort(function(a, b){
				return a.name.localeCompare(b.name);
			});
		this.state = {
			modalVisible: false,
			category: '',
			currentList: newList,
		}
	}

	sortList = (itemValue) => {
		if (itemValue == 'name') {
			newList = this.state.currentList.sort(function(a, b){
				return a.name.localeCompare(b.name);
			});
			this.setState({
				category: itemValue,
				currentList: newList,
			});
		} else if (itemValue == 'amt') {
			newList = this.state.currentList.sort(function(a, b){
				return (+a.amount) - (+b.amount);
			});
			this.setState({
				category: itemValue,
				currentList: newList,
			});
		} else if (itemValue == 'due') {
			newList = this.state.currentList.sort(function(a, b){
				return a.due.localeCompare(b.due);
			});
			this.setState({
				category: itemValue,
				currentList: newList,
			});
		} else if (itemValue == 'status') {
			newList = this.state.currentList.sort(function(a, b){
				return a.status.localeCompare(b.status);
			});
			this.setState({
				category: itemValue,
				currentList: newList,
			});
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
	    					onValueChange={(itemValue, itemIndex) => {
	    						//this.setState({category: itemValue});
	    						this.sortList(itemValue);
	    					}}>	    	
	    					{categories.map((item, index) => (
	    						<Picker.Item key={index} label={item.label} value={item.value} />
							))}
	    				</Picker>
					</View>
				</View>
				{
					this.state.currentList.map((item, index) => (
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
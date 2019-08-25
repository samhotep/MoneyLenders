import React, {Component} from 'react';
import {Text, View, Image, Picker, TouchableOpacity} from 'react-native';
import { withNavigation } from 'react-navigation';
import styles from '../styles/styles';

class ItemCard extends Component {
	render () {
		return(
			<View style={[styles.itemcard, styles.shadow]}>
				<Image source={require('../images/icons/account_info_icon.png')} style={styles.itemcardicon}/>
				<View style={styles.itemcardlist}>
					<Text style={styles.itemcardtext1}>Account Name</Text>
					<Text style={styles.itemcardtext1}>{this.props.acct}</Text>
					<Text style={styles.itemcardtext2}>Amount</Text>
					<Text style={styles.itemcardtext2}>{this.props.amt}</Text>
					<Text style={styles.itemcardtext3}>Percentage Rate</Text>
					<Text style={styles.itemcardtext3}>{this.props.perc}</Text>
					<Text style={styles.itemcardtext4}>Due</Text>
					<Text style={styles.itemcardtext4}>{this.props.due}</Text>
					<Text style={styles.itemcardtext5}>Status</Text>
					<Text style={styles.itemcardtext5}>{this.props.status}</Text>
				</View>		
				<TouchableOpacity onPress={() => {this.props.navigation.navigate('EditInfo')}}>
					<Image source={require('../images/icons/right_arrow_icon.png')} style={styles.iteminfoicon}/>
				</TouchableOpacity>
			</View>
		);
	}	
}

export default withNavigation(ItemCard);
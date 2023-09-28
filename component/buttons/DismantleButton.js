import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

export default class Sokme_Button extends Component {
	render() {
		return (
			<TouchableOpacity style={styles.sokmeButtonArea}>
				<View style={styles.sokmeButton}>
					<Image
						style={styles.sokmeButtonTinyLogo}
						source={require('../../assets/icons/ic_Attention.png')}
					/>
					<Text style={styles.Sokme_ButtonText}>Sökme</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	sokmeButtonArea: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	sokmeButton: {
		backgroundColor: colors.red,
		paddingHorizontal: 10,
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 5,
		padding: 3,
	},
	sokmeButtonTinyLogo: {
		width: 15,
		height: 15,
		marginRight: distances.quarterDistance,
	},
	Sokme_ButtonText:{
	color:colors.white,
	}
});

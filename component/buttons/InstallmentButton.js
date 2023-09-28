import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const KurulumButton = () => {
	return (
		<TouchableOpacity style={styles.button}>
			<View style={styles.buttonContent}>
				<Image
					style={styles.icon}
					source={require('../../assets/icons/ic_hammer.png')}
				/>
				<Text style={styles.buttonText}>Kurulum</Text>
			</View>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
	button: {
		flex: 1,
		backgroundColor: colors.lightblue,
		borderRadius: distances.quarterDistance / 2,
		paddingVertical: distances.quarterDistance / 2,
	},
	buttonContent: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: {
		width: distances.defaultDistance,
		height: distances.defaultDistance,
		marginRight: distances.quarterDistance,
	},
	buttonText: {
		color: colors.white,
	},
});

export default KurulumButton;

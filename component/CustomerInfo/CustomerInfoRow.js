import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import fonts from '../../constants/fonts';

const CustomerInfoRow = ({ title, desc, descriptionName }) => {
	return (
		<View style={styles.CustomerInfoRow}>
			<View style={styles.titleContainer}>
				<Text style={styles.CustomerInfoRowtitle}>{title}</Text>
			</View>

			<View style={styles.decContainer}>
				<Text style={styles.dec}>
					{desc.split('\n').map((line, index) => (
						<Text key={index}>
							{line}
							{index < desc.split('\n').length - 1 && '\n'}
						</Text>
					))}
				</Text>
				<Text style={styles.dec}>{descriptionName}</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	CustomerInfoRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		paddingHorizontal: distances.defaultDistance,
		paddingVertical: distances.halfDistance,
		borderBottomWidth: 0.5,
		borderBottomColor: colors.borderColor,
    marginTop:distances.quarterDistance 
	},
	CustomerInfoRowtitle: {
		fontSize: fonts.normal,
		flex: 1,
	},
	decContainer: {
		flex: 1,
		alignItems: 'flex-end',
	},
	dec: {
		color: colors.grey3,
	},
});

export default CustomerInfoRow;

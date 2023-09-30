import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import distances from '../../../constants/distances';
import colors from '../../../constants/colors';

const CoolerInventoryComponentHeadArea = ({ storeCode, storeFullName }) => {
	return (
		<View style={styles.coolerInventoryComponentHeadArea}>
			<Text>{storeCode}</Text>
			<Text style={styles.coolerInventoryComponentHeadAreaStoreName}>
				{storeFullName}
			</Text>
		</View>
	);
};

export default CoolerInventoryComponentHeadArea;

const styles = StyleSheet.create({
	coolerInventoryComponentHeadArea: {
		paddingHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		backgroundColor: colors.white,
		paddingVertical: distances.halfDistance,
	},
	coolerInventoryComponentHeadAreaStoreName: {
		color: colors.grey,
	},
});

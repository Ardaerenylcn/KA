import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import distances from '../../../constants/distances';
import colors from '../../../constants/colors';

const CoolerInventoryComponentBodyArea = ({ coolerCode, coolerDesc }) => {
	return (
		<View style={styles.coolerInventoryComponentBodyArea}>
			<Text>{coolerCode}</Text>
			<Text style={styles.coolerInventoryComponentBodyAreaCoolerDesc}>
				{coolerDesc}
			</Text>
		</View>
	);
};

export default CoolerInventoryComponentBodyArea;

const styles = StyleSheet.create({
	coolerInventoryComponentBodyArea: {
		paddingHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		paddingVertical: distances.halfDistance,
		backgroundColor: colors.white,
	},
	coolerInventoryComponentBodyAreaCoolerDesc: {
		color: colors.grey,
	},
});

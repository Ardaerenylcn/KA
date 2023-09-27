import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import distances from '../../../constants/distances';
import colors from '../../../constants/colors';

const SogutucuEnvanteriComponentBodyArea = ({ CoolerCode, CoolerDesc }) => {
	return (
		<View style={styles.SogutucuEnvanteriComponentBodyArea}>
			<Text>{CoolerCode}</Text>
			<Text style={styles.SogutucuEnvanteriComponentBodyAreaCoolerDesc}>
				{CoolerDesc}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	SogutucuEnvanteriComponentBodyArea: {
		paddingHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		paddingVertical: distances.halfDistance,
		backgroundColor: colors.white,
	},
	SogutucuEnvanteriComponentBodyAreaCoolerDesc: {
		color: colors.grey,
	},
});
export default SogutucuEnvanteriComponentBodyArea;

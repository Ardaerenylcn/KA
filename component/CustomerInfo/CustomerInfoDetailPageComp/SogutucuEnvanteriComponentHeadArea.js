import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import distances from '../../../constants/distances';
import colors from '../../../constants/colors';

const SogutucuEnvanteriComponentHeadArea = ({ storeCode, storeFullName }) => {
	return (
		<View style={styles.SogutucuEnvanteriComponentHeadArea}>
			<Text>{storeCode}</Text>
			<Text style={styles.SogutucuEnvanteriComponentHeadAreaStoreName}>
				{storeFullName}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	SogutucuEnvanteriComponentHeadArea: {
		paddingHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		backgroundColor:colors.white,
		paddingVertical:distances.halfDistance,
	},
	SogutucuEnvanteriComponentHeadAreaStoreName: {
		color: colors.grey,
		
	},
});
export default SogutucuEnvanteriComponentHeadArea;

import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import distances from '../../../../../constants/distances';
import colors from '../../../../../constants/colors';

const DefectHeadComponent = ({
	storeCode,
	storeFullName,
	address,
	serialNumber,
	collerName,
	coolerDesc,
	directorate,
}) => {
	return (
		<View style={styles.arizaHeadComponentStyle}>
			<View style={styles.arizaHeadStoreArea}>
				<Text>{storeCode}</Text>
				<Text>{storeFullName}</Text>
				<Text style={styles.greyText}>{directorate}</Text>
				<Text style={styles.greyText}>{address}</Text>
			</View>
			<View style={styles.arizaHeadStoreArea}>
				<Text>{serialNumber}</Text>
				<Text style={styles.greyText}>Seri No.</Text>
				<View style={styles.arizaHeadStoreArea}>
					<Text>{collerName}</Text>
					<Text style={styles.greyText}>{coolerDesc}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	arizaHeadComponentStyle: {
		flex: 0.1,
		justifyContent: 'center',
		marginHorizontal: distances.defaultDistance,
		backgroundColor: colors.white,
		padding: distances.defaultDistance,
		margin: distances.defaultDistance,
		borderRadius: 10,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	arizaHeadStoreArea: {
		padding: distances.defaultDistance,
	},
	greyText: {
		color: colors.grey,
	},
});

export default DefectHeadComponent;

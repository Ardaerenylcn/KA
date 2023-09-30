import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';
import DismantleButton from '../../../buttons/DismantleButton';

const DismantleComponent = ({ barcodeCode, coolerDesc, agreement }) => {
	return (
		<View style={styles.dismantleComponentContainer}>
			<Text style={styles.faultCode}>{barcodeCode}</Text>
			<View style={styles.dismantleComponentProductAndButtonContainer}>
				<View style={styles.faultProductContainer}>
					<Text>{coolerDesc}</Text>
				</View>
				<TouchableOpacity style={styles.buttonContainer}>
					<DismantleButton />
				</TouchableOpacity>
			</View>
			<Text style={styles.agreementText}>Sözleşme NO.: {agreement}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	dismantleComponentContainer: {
		flex: 1,
		backgroundColor: colors.white,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	faultCode: {
		padding: distances.quarterDistance,
	},
	dismantleComponentProductAndButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: distances.quarterDistance,
	},
	faultProductContainer: {
		backgroundColor: 'white',
		flex: 0.6,
	},
	buttonContainer: {
		flex: 0.5,
		alignItems: 'flex-end',
	},
	agreementText: {
		padding: distances.quarterDistance,
	},
});

export default DismantleComponent;

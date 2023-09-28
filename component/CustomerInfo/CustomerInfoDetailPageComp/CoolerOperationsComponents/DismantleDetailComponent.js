import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';
import Sokme_Button from '../../../buttons/DismantleButton';
const DismantleComponent = ({ barcodeCode, colerDesc, agreement }) => {
	return (
		<View style={styles.ArızaBildirimiComponentBody}>
			<Text style={styles.FaultCode}>{barcodeCode}</Text>
			<View style={styles.ArızaBildirimiComponentBodyButtonAndProduct}>
				<View style={styles.FaultProduct}>
					<Text>{colerDesc} </Text>
				</View>
				<TouchableOpacity style={styles.Button}>
					<Sokme_Button />
				</TouchableOpacity>
			</View>
			<Text style={styles.ArgeementText}>Sözleşme NO.: {agreement}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	ArızaBildirimiComponentBody: {
		flex: 1,
		backgroundColor: colors.white,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	FaultCode: {
		padding: distances.quarterDistance,
	},
	ArızaBildirimiComponentBodyButtonAndProduct: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: distances.quarterDistance,
	},
	FaultProduct: {
		backgroundColor: 'white',
		flex: 0.6,
	},
	Button: {
		flex: 0.5,
		alignItems: 'flex-end',
	},
	ArgeementText: {
		padding: distances.quarterDistance,
	},
});

export default DismantleComponent;

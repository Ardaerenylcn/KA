import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import ArizaButton from '../../../buttons/Ariza_button';
import distances from '../../../../constants/distances';

const ArızaBildirimiBodyComponent = ({
	faultCode,
	faultProduct,
	argeement,
}) => {
	return (
		<View style={styles.ArızaBildirimiComponentBody}>
			<Text style={styles.FaultCode}>{faultCode}</Text>
			<View style={styles.ArızaBildirimiComponentBodyButtonAndProduct}>
				<View style={styles.FaultProduct}>
					<Text>{faultProduct} </Text>
				</View>
				<TouchableOpacity style={styles.Button}>
					<ArizaButton />
				</TouchableOpacity>
			</View>
			<Text style={styles.ArgeementText}>Sözleşme NO.: {argeement}</Text>
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

export default ArızaBildirimiBodyComponent;

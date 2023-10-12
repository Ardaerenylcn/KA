import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../../../constants/colors';
import DefectButton from '../../../buttons/DefectButton';
import distances from '../../../../constants/distances';

const DefectNoticeBodyComponent = ({ faultCode, faultProduct, agreement }) => {
	return (
		<View style={styles.defectNoticeBodyComponentContainer}>
			<Text style={styles.defectNoticeBodyComponentfaultCodeText}>
				{faultCode}
			</Text>
			<View style={styles.defectNoticeBodyComponentProductAndButtonContainer}>
				<View style={styles.defectNoticeBodyComponentProductContainer}>
					<Text>{faultProduct}</Text>
				</View>
				<TouchableOpacity
					style={styles.defectNoticeBodyComponentButtonContainer}
				>
					<DefectButton />
				</TouchableOpacity>
			</View>
			<Text style={styles.defectNoticeBodyComponentAgreementText}>
				Sözleşme NO.: {agreement}
			</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	defectNoticeBodyComponentContainer: {
		flex: 1,
		backgroundColor: colors.white,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	defectNoticeBodyComponentfaultCodeText: {
		padding: distances.quarterDistance,
	},
	defectNoticeBodyComponentProductAndButtonContainer: {
		flex: 1,
		flexDirection: 'row',
		paddingHorizontal: distances.quarterDistance,
	},
	defectNoticeBodyComponentProductContainer: {
		backgroundColor: colors.white,
		flex: 0.6,
	},
	defectNoticeBodyComponentButtonContainer: {
		flex: 0.5,
		alignItems: 'flex-end',
	},
	defectNoticeBodyComponentAgreementText: {
		padding: distances.quarterDistance,
	},
});

export default DefectNoticeBodyComponent;

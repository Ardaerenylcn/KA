import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import { FontAwesome } from '@expo/vector-icons';
import styleVariables from '../../Styles/styleVariables';

const VisitEntryBottomArea = () => {
	return (
		<View style={[styles.visitEntryBottomContainer, styleVariables.shadow]}>
			<View style={styles.visitEntryBottomContainerTitleArea}>
				<Text style={styles.visitEntryBottomContainerTitleAreaText}>
					FOTOĞRAF EKLE
				</Text>
			</View>
			<View style={{ height: '100%' }}>
				<TouchableOpacity>
					<View style={styles.visitEntryBottomContainerIconArea}>
						<FontAwesome name="camera" size={32} color={colors.grey} />
					</View>
				</TouchableOpacity>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	visitEntryBottomContainer: {
		marginTop: distances.defaultDistance,
		paddingTop: distances.defaultDistance,
		backgroundColor: colors.white,
		marginHorizontal: distances.defaultDistance,
		borderRadius: distances.quarterDistance,
		height: 200,
	},
	visitEntryBottomContainerTitleArea: {
		marginHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor,
	},
	visitEntryBottomContainerTitleAreaText: {
		color: colors.grey,
		fontWeight: 'bold',
		marginBottom: distances.halfDistance,
	},
	visitEntryBottomContainerIconArea: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 120,
	},
});

export default VisitEntryBottomArea;

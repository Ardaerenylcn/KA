import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import colors from '../../constants/colors';

import distances from '../../constants/distances';
import { FontAwesome } from '@expo/vector-icons';

const VisitEntryBottomArea = () => {
	return (
		<View style={styles.visitEntryBottomContainer}>
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
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	visitEntryBottomContainerTitleArea: {
		paddingTop: distances.defaultDistance,
		marginHorizontal: distances.defaultDistance,
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor,
	},
	visitEntryBottomContainerTitleAreaText: {
		color: colors.grey,
		fontWeight: '500',
		marginBottom: distances.halfDistance,
	},
	visitEntryBottomContainerIconArea: {
		justifyContent: 'center',
		alignItems: 'center',
		height: 120,
	},
});

export default VisitEntryBottomArea;

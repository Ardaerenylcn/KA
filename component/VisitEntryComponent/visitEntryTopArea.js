import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';
import styleVariables from '../../Styles/styleVariables';

const VisitEntryTopArea = ({ visitEntryStoreCode, visitEntryStoreName }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View style={[styles.visitEntryContainer, styleVariables.shadow]}>
			<View style={styles.visitEntyTextArea}>
				<Text>{visitEntryStoreCode}</Text>
				<Text style={styles.visitEntryStoreName}>{visitEntryStoreName}</Text>
			</View>
			<View style={styles.border}></View>
			<View style={styles.visitEntyTextAreaSecondSide}>
				<View style={styles.visitEntrySwitchArea}>
					<Text style={styles.visitEntrySwitchAreaText}>İlgililere Bildir</Text>
					<Switch
						trackColor={{ false: colors.white, true: colors.lightblue }}
						thumbColor={isEnabled ? colors.white : colors.white}
						ios_backgroundColor="#F1F1F1"
						onValueChange={toggleSwitch}
						value={isEnabled}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	visitEntryContainer: {
		padding: distances.defaultDistance,
		backgroundColor: colors.white,
		margin: distances.defaultDistance,
		borderRadius: distances.quarterDistance,
	},
	visitEntyTextArea: {
		padding: distances.defaultDistance,
	},
	visitEntyTextAreaSecondSide: {
		paddingHorizontal: distances.defaultDistance,
		paddingVertical: distances.quarterDistance,
	},
	visitEntrySwitchArea: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	visitEntrySwitchAreaText: {
		flex: 1,
		fontSize: fonts.big,
	},
	visitEntryStoreName: {
		color: colors.grey,
	},
	border: {
		flex: 1,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
});

export default VisitEntryTopArea;

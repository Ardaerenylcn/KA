import React, { useState } from 'react';
import { Text, View, StyleSheet, Switch, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';

const VisitEntryTopArea = ({ visitEntryStoreCode, visitEntryStoreName }) => {
	const [isEnabled, setIsEnabled] = useState(false);
	const toggleSwitch = () => setIsEnabled(previousState => !previousState);

	return (
		<View style={styles.visitEntryContainer}>
			<View style={styles.visitEntryContainerText}>
				<Text style={styles.visitEntryContainerText}>
					{visitEntryStoreCode}
				</Text>
				<View style={styles.border}>
					<Text
						style={[styles.visitEntryContainerText, styles.visitEntryStroeText]}
					>
						{visitEntryStoreName}
					</Text>
				</View>
				<View style={styles.ilgilibilidirimswitch}>
					<View>
						<Text style={[styles.defaultPadding, styles.bigsize]}>
							İlgililere Bildir
						</Text>
					</View>
					<View style={styles.switch}>
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
		</View>
	);
};

const styles = StyleSheet.create({
	visitEntryContainer: {
		paddingVertical: distances.defaultDistance,
		backgroundColor: colors.white,
		margin: distances.defaultDistance,
		borderRadius: distances.quarterDistance,
		marginTop: distances.defaultDistance,
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	visitEntryContainerText: {
		marginHorizontal: distances.defaultDistance,
	},
	border: {
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	defaultPadding: {
		padding: distances.defaultDistance,
	},
	ilgilibilidirimswitch: {
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	switch: {
		justifyContent: 'space-around',
	},
	textContainer: {
		flex: 1,
	},
	bigsize: {
		fontSize: fonts.big,
	},
	switchContainer: {},
	visitEntryStroeText: {
		color: colors.grey,
		marginBottom: distances.defaultDistance,
	},
});

export default VisitEntryTopArea;

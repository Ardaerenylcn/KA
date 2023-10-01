import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
import styleVariables from '../../Styles/styleVariables';

const VisitEntryMiddleArea = () => {
	const [number, onChangeNumber] = React.useState('');

	return (
		<View style={[styles.visitEntryContainer, styleVariables.shadow]}>
			<View style={styles.visitEntryTitleContainer}>
				<Text style={styles.visitEntryTitle}>AÇIKLAMA GİRİNİZ</Text>
			</View>
			<View style={styles.visitEntryDesc}>
				<ScrollView>
					<TextInput
						style={styles.visitEntryDescTextInput}
						onChangeText={onChangeNumber}
						value={number}
						placeholder="Nokta ile ilgili açıklamalarınızı bu alana giriniz"
						keyboardType="numeric"
						fontSize={16}
						multiline={true}
						editable={true}
					/>
				</ScrollView>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	visitEntryContainer: {
		padding: distances.defaultDistance,
		backgroundColor: colors.white,
		marginHorizontal: distances.defaultDistance,
		borderRadius: distances.quarterDistance,
	},
	visitEntryTitle: {
		color: colors.grey,
		fontWeight: 'bold',
		marginBottom: distances.halfDistance,
	},
	visitEntryTitleContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor,
	},
	visitEntryDescTextInput: {
		marginVertical: distances.defaultDistance,
		marginHorizontal: distances.defaultDistance,
		padding: distances.halfDistance,
		height: 70,
		maxHeight: 70,
	},
});

export default VisitEntryMiddleArea;

import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, ScrollView } from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';
const VisitEntryMiddleArea = () => {
	const [number, onChangeNumber] = React.useState('');

	return (
		<View style={styles.visitEntryContainer}>
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
		shadowOffset: {
			width: 0,
			height: 2,
		},
		shadowOpacity: 0.3,
		shadowRadius: 4,
		elevation: 5,
	},
	visitEntryTitle: {
		marginLeft: distances.halfDistance,
		color: colors.grey,
		fontWeight: '500',
		marginBottom: distances.halfDistance,
	},
	visitEntryTitleContainer: {
		borderBottomWidth: 1,
		borderBottomColor: colors.borderColor,
		marginHorizontal: distances.defaultDistance,
	},
	visitEntryDescTextInput: {
		marginVertical: distances.defaultDistance,
		marginHorizontal: distances.defaultDistance * 2,
		padding: distances.halfDistance,
		height: 70,
		maxHeight: 70,
	},
});

export default VisitEntryMiddleArea;

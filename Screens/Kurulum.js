import React, { useState } from 'react'; // useState eklenmeli
import { View, Text, TextInput, StyleSheet } from 'react-native';
import colors from '../constants/colors';
import distances from '../constants/distances';

const Kurulum = () => {
	const [number, onChangeNumber] = useState('arda');

	return (
		<View>
			<TextInput
				style={styles.KurulumInputBox}
				onChangeText={onChangeNumber}
				value={number}
				placeholder="useless placeholder"
				keyboardType="numeric"
			/>
		</View>
	);
};

const styles = StyleSheet.create({
	KurulumInputBox: {
		borderWidth: 1,
		borderColor: colors.borderColor,
		padding: distances.quarterDistance,
		borderRadius: 5,
		marginHorizontal: distances.defaultDistance,
		marginTop: distances.defaultDistance,
	},
});

export default Kurulum;

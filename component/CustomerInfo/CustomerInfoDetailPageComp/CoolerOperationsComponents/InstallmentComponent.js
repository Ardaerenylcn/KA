import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';

const InstallmentComponent = () => {
	const [number, onChangeNumber] = useState('');
	const inputRef = useRef(null);
	const [showCancel, setShowCancel] = useState(false);

	const openKeyboard = () => {
		if (inputRef.current) {
			inputRef.current.focus();
			setShowCancel(true);
		}
	};

	const closeKeyboard = () => {
		if (inputRef.current) {
			inputRef.current.blur();
			setShowCancel(false);
		}
	};

	const clearInput = () => {
		onChangeNumber('');
		if (inputRef.current) {
			inputRef.current.clear();
		}
		setShowCancel(false);
	};

	return (
		<View style={styles.installmentInputMainContainer}>
			<View style={styles.installmentInputContainer}>
				<TouchableOpacity onPress={openKeyboard}>
					<Image
						source={require('../../../../assets/icons/ic_carbon_search.png')}
						style={styles.installmentIcon}
					/>
				</TouchableOpacity>
				<TextInput
					ref={inputRef}
					style={styles.installmentInputBox}
					onChangeText={text => {
						onChangeNumber(text);
						setShowCancel(!!text);
					}}
					value={number}
					placeholder="Soğutucu adı, Soğutucu kodu ara..."
					onFocus={openKeyboard}
					onBlur={closeKeyboard}
				/>
			</View>
			{showCancel && (
				<TouchableOpacity onPress={clearInput} style={styles.cancelButton}>
					<Text style={styles.installmentCancelText}>İptal</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	installmentInputContainer: {
		backgroundColor: colors.borderColor,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: distances.halfDistance,
		padding: distances.quarterDistance,
		flex: 1,
	},
	installmentIcon: {
		width: 24,
		height: 24,
		marginRight: 8,
	},
	installmentInputMainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: distances.quarterDistance,
		marginTop: distances.defaultDistance,
	},
	installmentInputBox: {
		flex: 1,
	},

	cancelButton: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		marginLeft: distances.quarterDistance,
		backgroundColor: colors.white,
		borderRadius: distances.halfDistance,
	},
	installmentCancelText: {
		color: colors.lightblue,

	},
});

export default InstallmentComponent;

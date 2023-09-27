import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
	Keyboard,
} from 'react-native';
import colors from '../../../../constants/colors';
import distances from '../../../../constants/distances';

const KurulumHeadComponent = () => {
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
	};

	return (
		<View>
			<View
				style={[
					styles.inputContainer,
					showCancel && styles.inputContainerActive,
				]}
			>
				<TouchableOpacity onPress={openKeyboard}>
					<Image
						source={require('../../../../assets/icons/ic_carbon_search.png')}
						style={styles.icon}
					/>
				</TouchableOpacity>
				<TextInput
					ref={inputRef}
					style={styles.KurulumInputBox}
					onChangeText={text => {
						onChangeNumber(text);
						setShowCancel(!!text);
					}}
					value={number}
					placeholder="Soğutucu adı, Soğutucu kodu ara..."
					onFocus={openKeyboard}
					onBlur={closeKeyboard}
				/>
				{showCancel && (
					<TouchableOpacity onPress={clearInput}>
						<Text style={styles.cancelText}>İptal</Text>
					</TouchableOpacity>
				)}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	inputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		borderWidth: 1,
		borderColor: colors.borderColor,
		padding: distances.quarterDistance,
		borderRadius: 5,
		marginHorizontal: distances.defaultDistance,
		marginTop: distances.defaultDistance,
	},
	inputContainerActive: {
		borderColor: colors.primary,
	},
	icon: {
		width: 24,
		height: 24,
		marginRight: 8,

	},
	KurulumInputBox: {
		flex: 1,
	},
	cancelText: {
		color: colors.primary,
		marginRight: distances.defaultDistance,
	},
});

export default KurulumHeadComponent;

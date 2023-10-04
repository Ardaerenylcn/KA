import React, { useState, useRef } from 'react';
import {
	View,
	Text,
	TextInput,
	StyleSheet,
	Image,
	TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import distances from '../../constants/distances';

const PlaceHolder = ({ placeholder }) => {
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
		<View style={styles.WhereAmIScrollAreaInputMainContainer}>
			<View style={styles.WhereAmIScrollAreaInputContainer}>
				<TouchableOpacity onPress={openKeyboard}>
					<Image
						source={require('../../assets/icons/ic_carbon_search.png')}
						style={styles.inputIcon}
					/>
				</TouchableOpacity>
				<TextInput
					returnKeyType="done"
					autoCapitalize="none"
					autoCorrect={false}
					ref={inputRef}
					style={styles.WhereAmIInput}
					onChangeText={text => {
						onChangeNumber(text);
						setShowCancel(!!text);
					}}
					value={number}
					placeholder={placeholder}
					onFocus={openKeyboard}
					onBlur={closeKeyboard}
					placeholderTextColor={colors.grey}
				/>
			</View>
			{showCancel && (
				<TouchableOpacity onPress={clearInput} style={styles.cancelButton}>
					<Text style={styles.WhereAmIICancelText}>İptal</Text>
				</TouchableOpacity>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	WhereAmIScrollAreaInputMainContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		backgroundColor: colors.grey2,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
		paddingHorizontal: distances.defaultDistance,
		paddingVertical: distances.quarterDistance,
	},
	WhereAmIScrollAreaInputContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		flex: 1,
		backgroundColor: colors.borderColor,
		borderRadius: 6,
		paddingHorizontal: distances.quarterDistance,
	},
	inputIcon: {
		width: 16,
		height: 16,
		marginRight: distances.quarterDistance,
		tintColor: colors.grey,
	},
	WhereAmIInput: {
		flex: 1,
		paddingVertical: 8,
		color: colors.black,
	},
	cancelButton: {
		justifyContent: 'center',
		alignItems: 'center',
		padding: 8,
		marginLeft: distances.quarterDistance,
		borderRadius: distances.halfDistance,
	},
	WhereAmIICancelText: {
		color: colors.lightblue,
	},
});

export default PlaceHolder;

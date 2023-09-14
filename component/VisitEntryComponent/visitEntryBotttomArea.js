import React, { useState } from 'react';
import {
	Text,
	View,
	StyleSheet,
	Switch,
	TextInput,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';
import { FontAwesome } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const openImagePicker = () => {
	const options = {
		mediaType: 'photo',
		includeBase64: false,
		maxHeight: 2000,
		maxWidth: 2000,
	};

	launchImageLibrary(options, response => {
		if (response.didCancel) {
			console.log('User cancelled image picker');
		} else if (response.error) {
			console.log('Image picker error: ', response.error);
		} else {
			let imageUri = response.uri || response.assets?.[0]?.uri;
			setSelectedImage(imageUri);
		}
	});
};

const VisitEntryBottomArea = () => {
	return (
		<View style={styles.visitEntryBottomContainer}>
			<View style={styles.visitEntryBottomContainerTitleArea}>
				<Text style={styles.visitEntryBottomContainerTitleAreaText}>
					FOTOĞRAF EKLE
				</Text>
			</View>
			<View style={{ height: '100%' }}>
				<TouchableOpacity onPress={openImagePicker}>
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

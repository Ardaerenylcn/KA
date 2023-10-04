import React from 'react';
import {
	View,
	StyleSheet,
	TextInput,
	Image,
	Text,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import colors from '../../constants/colors';
import fonts from '../../constants/fonts';
import distances from '../../constants/distances';
import styleVariables from '../../Styles/styleVariables';

const WhereAmIScrollAreaInputComponent = ({ StoreCode, StoreFullname }) => {
	const [text, onChangeText] = React.useState('');

	return (
		<View style={styles.WhereAmIScrolAreaContainer}>
			<View style={styles.InputUpperArea}>
				<View style={styles.InputArea}>
					<View style={styles.InputAreaIcon}>
						<Image
							source={require('../../assets/icons/ic_carbon_search.png')}
							style={styles.WhereAmIScrolAreaIcon}
						/>
					</View>
					<TextInput
						returnKeyType="done"
						clearButtonMode="always"
						autoCapitalize="none"
						autoCorrect={false}
						onChangeText={onChangeText}
						placeholder={'Müşteri ara...'}
						placeholderTextColor={colors.grey}
						style={styles.WhereAmIInput}
					/>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	WhereAmIScrolAreaContainer: {},
	InputUpperArea: {
		backgroundColor: colors.grey2,
		padding: distances.defaultDistance,
		borderBottomWidth: 1,
		borderColor: colors.borderColor,
	},
	WhereAmIInput: {
		padding: distances.quarterDistance,
		flex: 1,
	},
	WhereAmIScrolAreaIcon: {
		width: 16,
		height: 16,
	},
	InputArea: {
		flexDirection: 'row',
		backgroundColor: colors.borderColor,
		borderRadius: 6,
	},
	InputAreaIcon: {
		justifyContent: 'center',
		alignItems: 'center',
		marginLeft: distances.quarterDistance,
	},
});

export default WhereAmIScrollAreaInputComponent;

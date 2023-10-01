import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import distances from '../../../../constants/distances';
import colors from '../../../../constants/colors';
import styleVariables from '../../../../Styles/styleVariables';

const DismantleDetailComponent = ({ storeCode, storeFullName }) => {
	return (
		<View
			style={[styles.dismantleDetailComponentContainer, styleVariables.shadow]}
		>
			<View style={styles.dismantleDetailHeadContainer}>
				<View style={styles.dismantleDetailTextArea}>
					<Text>{storeCode}</Text>
					<Text style={styles.dismantleDetailStoreName}>{storeFullName}</Text>
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	dismantleDetailComponentContainer: {
		flex: 1,
	},
	dismantleDetailHeadContainer: {
		flex: 0.1,
		justifyContent: 'center',
		marginHorizontal: distances.defaultDistance,
		backgroundColor: colors.white,
		padding: distances.defaultDistance,
		margin: distances.defaultDistance,
		borderRadius: 10,
	},
	dismantleDetailTextArea: {
		marginHorizontal: distances.defaultDistance,
	},
	dismantleDetailStoreName: {
		color: colors.grey,
	},
});

export default DismantleDetailComponent;
